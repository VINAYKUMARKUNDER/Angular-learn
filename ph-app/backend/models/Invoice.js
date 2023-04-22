const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Invoice = sequelize.define("Invoice", {
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


const Customer = require("./Customer");
const Medicine = require("./Medicine");
Invoice.belongsTo(Customer);
Invoice.belongsTo(Medicine);

module.exports = Invoice;
