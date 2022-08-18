const mysql = require("mysql2");

const myDb = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "SammyLydia21!"

});

myDb.connect(function(error) {
    if(error) throw error;
    console.log("database connected!");
});

module.exports = myDb;
