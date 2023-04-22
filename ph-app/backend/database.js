// const mysql = require('mysql2');

//  const conn= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Vinay@1313',
//     database:'my_blog'
// });

// module.exports=conn;

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ph', 'root', 'Vinay@1313', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports=sequelize;