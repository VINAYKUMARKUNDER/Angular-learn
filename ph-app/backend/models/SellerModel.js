const { DataTypes } = require('sequelize');
const db = require('../database');

const Seller = db.define('Sellers', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  about: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gst: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'sellers',
  timestamps: false
});

module.exports = Seller;
