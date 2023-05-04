const DataTypes = require("sequelize");
const db = require("../database");

const Cart = db.define(
  "cart",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    tableName: "customers",
    timestamps: false,
  }
);

const Customer = require("./CustomerModel");
const Medicine = require("./MedicineModel");
Cart.belongsTo(Customer);
Cart.belongsTo(Medicine);

module.exports = Customer;
