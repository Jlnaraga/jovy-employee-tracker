const mysql = require("mysql2");

const myDb = mysql.createConnection({
    host : "localhost",
    port : 3001,
    user : "root",
    password : "SammyLydia21!",
    database: 'db'

});

myDb.connect(function(error) {
    if(error) throw error;
    console.log("database connected!");
});


module.exports = myDb;
