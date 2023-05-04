const DataTypes = require("sequelize");
const db = require("../database");

const Customer_Order_History = db.define(
  "Customer_Order_History",
  {
    orderId: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    tableName: "Customer_Order_History",
    timestamps: false,
  }
);

const Customer = require("./CustomerModel");
const Medicine = require("./MedicineModel");


Customer_Order_History.belongsTo(Medicine, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Customer_Order_History.belongsTo(Customer, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
  
});

module.exports = Customer_Order_History;
