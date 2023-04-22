const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database");

const Invoice = db.define("Invoice", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  invoice_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  customer_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medicine_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}
  , {
    tableName: 'invoices',
    timestamps: false
  });


const Customer = require("./CustomerModel");
const Medicine = require("./MedicineModel");
Invoice.belongsTo(Customer);
Invoice.belongsTo(Medicine);

module.exports = Invoice;
