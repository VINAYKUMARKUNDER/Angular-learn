const mysql = require('mysql2');

 const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Vinay@1313',
    database:'my_blog'
});

module.exports=conn;