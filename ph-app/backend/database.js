// const mysql = require('mysql2');

//  const conn= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Vinay@1313',
//     database:'my_blog'
// });

// module.exports=conn;

const { Sequelize } = require("sequelize");
const conn = new Sequelize("ph", "root", "Vinay@1313", {
  host: "localhost",
  dialect: "mysql",
});




let genrateTable = () => {
  conn.query(`
    CREATE TABLE sellers (
      id BIGINT NOT NULL AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      address VARCHAR(255) NOT NULL,
      email VARCHAR(30) NOT NULL UNIQUE,
      about VARCHAR(50) NOT NULL,
      gst VARCHAR(50) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )`
  );

    conn.query(`
          CREATE TABLE customers (
            id BIGINT NOT NULL AUTO_INCREMENT,
            address VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(255),
            phone VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
          )`
      );

  conn.query(`
      CREATE TABLE medicine (
        id BIGINT NOT NULL AUTO_INCREMENT,
        about VARCHAR(255),
        image BLOB NOT NULL,
        batchId VARCHAR(30) NOT NULL,
        type VARCHAR(30) NOT NULL,
        expDate DATE NOT NULL,
        mfgCompany VARCHAR(50) NOT NULL,
        mfgDate DATE NOT NULL,
        unit INTEGER NOT NULL,
        price FLOAT(53) NOT NULL,
        productName VARCHAR(255) NOT NULL,
        totalLeafInOneBox INTEGER NOT NULL,
        numberOfItemInOneLeaf INTEGER NOT NULL,
        sellerId BIGINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (sellerId) REFERENCES sellers(id)
      )`
    );

  conn.query(`
      CREATE TABLE invoices (
        id BIGINT NOT NULL AUTO_INCREMENT,
        invoiceDate DATE NOT NULL,
        totalAmount FLOAT(53) NOT NULL,
        customerId BIGINT NOT NULL,
        medicineId BIGINT,
        PRIMARY KEY (id),
        FOREIGN KEY (customerId) REFERENCES customers(id),
        FOREIGN KEY (medicineId) REFERENCES medicine(id)
      )`
    );

  conn.query(`
      CREATE TABLE inventory (
        id BIGINT NOT NULL AUTO_INCREMENT,
        dateAdded DATE NOT NULL,
        quantity INTEGER NOT NULL,
        unitPrice FLOAT(53) NOT NULL,
        medicineId BIGINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (medicineId) REFERENCES medicine(id)
      )`
    );

    conn.query(`
    create table cart (
      cartId integer not null  AUTO_INCREMENT, 
      customerId bigint, 
      medicineId bigint UNIQUE, 
      primary key (cartId),
      foreign key (customerId) references customers (id),
      foreign key (medicinesId) references medicine (id)
    )`
    );
};

g=()=>{
  conn.query(`
  create table Customer_Order_History (
    orderId integer not null  AUTO_INCREMENT, 
    customerId bigint, 
    medicineId bigint UNIQUE, 
    primary key (orderId),
    foreign key (customerId) references customers (id),
    foreign key (medicineId) references medicine (id)
  )`
  );
}




// genrateTable();
// g();

module.exports = conn;
