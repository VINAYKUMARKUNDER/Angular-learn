const Sequelize = require("sequelize");
const sequelize = require("../database");

const Medicine = require("./Medicine");

const Inventory = sequelize.define("inventory", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  dateAdded: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

Inventory.belongsTo(Medicine, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Inventory;
