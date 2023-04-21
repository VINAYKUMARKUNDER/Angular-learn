const mysql = require('mysql2');


// CREATE operation
const createProduct = (product, callback) => {
  connection.query('INSERT INTO products SET ?', product, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results.insertId);
    }
  });
};

// READ operation
const getProductById = (productId, callback) => {
  connection.query('SELECT * FROM products WHERE id = ?', [productId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results[0]);
    }
  });
};

// UPDATE operation
const updateProduct = (productId, product, callback) => {
  connection.query('UPDATE products SET ? WHERE id = ?', [product, productId], (error, results) => {
    if (error) {
      callback(error, null);
    } else if (results.affectedRows === 0) {
      callback(new Error(`Product with id ${productId} not found`), null);
    } else {
      callback(null, results.changedRows);
    }
  });
};

// DELETE operation
const deleteProduct = (productId, callback) => {
  connection.query('DELETE FROM products WHERE id = ?', [productId], (error, results) => {
    if (error) {
      callback(error, null);
    } else if (results.affectedRows === 0) {
      callback(new Error(`Product with id ${productId} not found`), null);
    } else {
      callback(null, results.affectedRows);
    }
  });
};
