const {Pool, Client} = require ('pg')
const connectionString = 'postgressql://postgres:root@localhost:5050/tokimonDatabase'

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT* from Tokimon', (err,res)=>{
    console.log(err,res)
    client.end()
})

