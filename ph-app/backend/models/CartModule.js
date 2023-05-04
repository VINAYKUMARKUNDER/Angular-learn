const DataTypes = require("sequelize");
const db = require("../database");

const Cart = db.define(
  "cart",
  {
    cartId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    tableName: "cart",
    timestamps: false,
  }
);

const Customer = require("./CustomerModel");
const Medicine = require("./MedicineModel");


Cart.belongsTo(Medicine, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Cart.belongsTo(Customer, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
  
});

module.exports = Cart;
