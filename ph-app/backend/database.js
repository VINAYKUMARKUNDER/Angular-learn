const {createPool} = require('mysql2');

const connect =createPool({
    root:'localhost',
    user:'root',
    password:'Vinay@1313',
    database:'ph',
    connectionLimit:10
});


  

connect.query(`CREATE TABLE medicine (
    id INT AUTO_INCREMENT PRIMARY KEY,
    batchId VARCHAR(255) NOT NULL,
    productName VARCHAR(255) NOT NULL,
    mgfCompany VARCHAR(255) NOT NULL,
    mgfDate DATE NOT NULL,
    expDate DATE NOT NULL,
    totalLeaf INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )
  
  `, (err, res, fill)=>{
    if(err)return console.log(err)
    return console.log(res)
})