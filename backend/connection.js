var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abazovic',
    database:'projekt_baza'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('Successfully connected')
});

module.exports = connection;