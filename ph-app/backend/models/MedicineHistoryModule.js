const { DataTypes } = require("sequelize");
const db = require("../database");
const Seller = require("./SellerModel");
const Customer = require("./CustomerModel");
const Medicine = require('./MedicineModel')

const MedicineHistory = db.define(
  "MedicineHistory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mfgcompany: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mfgdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
   unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type:{
      type:DataTypes.STRING,
      allowNull:false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    batchid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalLeafInOneBox: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numberOfItemInOneLeaf:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "MedicineHistory",
    timestamps: false,
  }
);

MedicineHistory.belongsTo(Seller, { foreignKey: "sellerId" });
MedicineHistory.belongsTo(Customer, { foreignKey: "customerId" });
MedicineHistory.belongsTo(Medicine, { foreignKey: "medicineId" });

module.exports = MedicineHistory;
