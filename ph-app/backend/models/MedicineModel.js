const { DataTypes } = require("sequelize");
const db = require("../database");
const Seller = require("./SellerModel");

const Medicine = db.define(
  "medicine",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mfg_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mfg_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
   unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exp_date: {
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
    batch_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_leaf_in_one_box: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number_of_item_in_one_leaf:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "medicine",
    timestamps: false,
  }
);

Medicine.belongsTo(Seller, { foreignKey: "seller_id" });

module.exports = Medicine;
