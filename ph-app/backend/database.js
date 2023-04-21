const mysql = require('mysql2');

 const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Vinay@1313',
    database:'my_blog'
});

// conn.connect((err)=>{
//     if(err)console.log(err)
//     else console.log('cnnect')
// })

conn.query('select * from post', (err, res)=>{
    console.log(res)
})


