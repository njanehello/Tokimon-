const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
var pool;
pool = new Pool({ 
    connectionString: process.env.DATABASE_URL
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
    var tableCreationQuery = `CREATE TABLE IF NOT EXISTS public.tokimons (id serial, trainername varchar(20), tokimonname varchar(50), weight int, height int, fly int, fire int, water int, electric int, frozen int, total int)`
    pool.query(tableCreationQuery, (error, result) => {
    });
    res.render('tokimon.ejs')
});
app.get('/AddTokimon', (req,res) => { res.render('AddTokimon')})
app.get('/trainer', (req,res) => { res.render('trainer')})
app.get('/database', (req,res) => { res.render('database')})

app.get('/database', (req, res) => {
    var getUsersQuery = `SELECT * FROM tokimons`;
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = {'rows': result.rows };
        res.render('database.ejs', results)
    });
});

app.get('/database/:id', (req,res) => {
    req.params.id // we can grab the id from the request HTML
    var IDQuery = `SELECT * FROM tokimons WHERE id=${req.params.id}`;
    pool.query(IDQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = {'rows': result.rows };
        res.render('modify.ejs', results)
    });
});

app.post("/update", function(req, res) {
    var changeQuery = `UPDATE tokimons SET trainername = '${req.body.trainerName}', tokimonname = '${req.body.name}', weight = ${req.body.weight}, height = ${req.body.height}, fly = ${req.body.fly}, fire = ${req.body.fire}, water = ${req.body.water}, electric = ${req.body.electric}, frozen = ${req.body.frozen}, total = ${req.body.total}  WHERE id = ${req.body.sid}`;

    pool.query(changeQuery, (error, result) => {
        if (error)
            res.end(error);
    });

    var getUsersQuery = `SELECT * FROM tokimons`;
    setTimeout(function(){
        pool.query(getUsersQuery, (error, result) => {
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

app.post("/submit", (req, res) => {
    
    var submitQuery = `INSERT INTO tokimons(trainername, tokimonname, weight, height, fly, fire, water, electric, frozen, total) VALUES('${req.body.trainerName}','${req.body.name}',${req.body.weight},${req.body.height},${req.body.fly}, ${req.body.fire},${req.body.water},${req.body.electric},${req.body.frozen},${req.body.total})`;
    
    pool.query(submitQuery, (error, result) => {
        if (error)
            res.end(error);
    });
    
    res.render('submit.ejs')
});