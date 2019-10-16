const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
  //connectionString: 'postgres://postgres:@localhost/toki_data'
});
pool.connect();
var app = express();

app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


app.get('/', (req, res) => {
    var tableCreation = `CREATE TABLE IF NOT EXISTS public.tokimons (id serial, trainername varchar(50), tokimonname varchar(50), weight int, height int, fly int, fight int, fire int, water int, electric int, frozen int, total int)`
    pool.query(tableCreation, (error, result) => {
    });
    res.render('tokimon.ejs')
});

app.get('/AddTokimon', (req,res) => { res.render('AddTokimon')})
app.get('/trainer', (req,res) => { res.render('trainer')})

app.get('/database', (req, res) => {
    var getTableInfo = `SELECT * FROM tokimons`;
    pool.query(getTableInfo, (error, result) => {
        if (error)
            res.end(error);
        var results = {'rows': result.rows };
        res.render('database.ejs', results)
    });
});


/*
app.get('/database/:id', (req,res) => {
    req.params.id // we can grab the id from the request HTML
    var idInfo = `SELECT * FROM tokimons WHERE id=${req.params.id}`;
    pool.query(idInfo, (error, result) => {
        if (error)
            res.end(error);
        var results = {'rows': result.rows };
        res.render('modify.ejs', results)
    });
});

app.post("/update", function(req, res) {
    var updateInfo = `UPDATE tokimons SET trainername = '${req.body.trainerName}', tokimonname = '${req.body.tokimonname}', weight = ${req.body.weight}, height = ${req.body.height}, fly = ${req.body.fly}, fight = ${req.body.fight}, fire = ${req.body.fire}, water = ${req.body.water}, electric = ${req.body.electric}, frozen = ${req.body.frozen}, total = ${req.body.total}  WHERE id = ${req.body.id}`;

    pool.query(updateInfo, (error, result) => {
        if (error)
            res.end(error);
    });

    var getTableInfo = `SELECT * FROM tokimons`;
    setTimeout(function(){
        pool.query(getTableInfo, (error, result) => {
            if (error)
                res.end(error);
            var results = {'rows': result.rows };
            res.render('database.ejs', results)
        });
    }, 500);
    
});

app.get('/remove/:id', (req,res) => {
    req.params.tid // we can grab the id from the request HTML
    var deleteQuery = `DELETE FROM tokimons WHERE id=${req.params.id}`;
    pool.query(deleteQuery, (error, result) => {
        if (error)
            res.end(error);
        res.render('delete.ejs')
    });
});
*/



app.post("/submit", (req, res) => {
    
    var insertData = `INSERT INTO tokimons(trainername, tokimonname, weight, height, fly, fight, fire, water, electric, frozen) VALUES('${req.body.trname}','${req.body.tokiname}',${req.body.we},${req.body.he},${req.body.fl},${req.body.fig}, ${req.body.fi},${req.body.wa},${req.body.el},${req.body.fr})`;
    console.log(insertData);

    pool.query(insertData, (error, result) => {
        if (error)
            res.end(error);
    });
    res.render('submit.ejs')
});