const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Seller = require('./seller');

const Medicine = sequelize.define('medicine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  manufacturingDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  expiryDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  batchId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalLeafInOneBox: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  about: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Medicine.belongsTo(Seller, { foreignKey: 'seller_id' });

module.exports = Medicine;
