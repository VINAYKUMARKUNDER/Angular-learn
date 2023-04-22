const DataTypes = require("sequelize");
const db = require("../database");

const Medicine = require("./MedicineModel");

const Inventory = db.define("inventory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  medicineId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateAdded: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
},{

  tableName: 'inventory',
  timestamps: false

});

Inventory.belongsTo(Medicine, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
  
});

module.exports = Inventory;
