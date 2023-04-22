const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database");

const Invoice = db.define("Invoice", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  invoiceDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});


const Customer = require("./CustomerModel");
const Medicine = require("./MedicineModel");
Invoice.belongsTo(Customer);
Invoice.belongsTo(Medicine);

module.exports = Invoice;
