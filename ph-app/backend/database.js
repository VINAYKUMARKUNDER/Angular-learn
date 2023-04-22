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
      email VARCHAR(30) NOT NULL,
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
            email VARCHAR(255) NOT NULL,
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
        batch_id VARCHAR(30) NOT NULL,
        type VARCHAR(30) NOT NULL,
        exp_date DATE NOT NULL,
        mfg_company VARCHAR(50) NOT NULL,
        mfg_date DATE NOT NULL,
        unit INTEGER NOT NULL,
        price FLOAT(53) NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        total_leaf_in_one_box INTEGER NOT NULL,
        number_of_item_in_one_leaf INTEGER NOT NULL,
        seller_id BIGINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (seller_id) REFERENCES sellers(id)
      )`
    );

  conn.query(`
      CREATE TABLE invoices (
        id BIGINT NOT NULL AUTO_INCREMENT,
        invoice_date DATE NOT NULL,
        total_amount FLOAT(53) NOT NULL,
        customer_id BIGINT NOT NULL,
        medicine_id BIGINT,
        PRIMARY KEY (id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        FOREIGN KEY (medicine_id) REFERENCES medicine(id)
      )`
    );

  conn.query(`
      CREATE TABLE inventory (
        id BIGINT NOT NULL AUTO_INCREMENT,
        date_added DATE NOT NULL,
        quantity INTEGER NOT NULL,
        unit_price FLOAT(53) NOT NULL,
        medicine_id BIGINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (medicine_id) REFERENCES medicine(id)
      )`
    );
};


// genrateTable();

module.exports = conn;
