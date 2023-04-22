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
  customerId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  medicineId:{
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
