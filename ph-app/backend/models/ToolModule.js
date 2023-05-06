const { DataTypes } = require("sequelize");
const db = require("../database");
const Seller = require("./SellerModel");

const Tool = db.define(
  "tool",
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
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    type:{
      type:DataTypes.STRING,
      allowNull:false
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    branchName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    tableName: "tool",
    timestamps: false,
  }
);

Tool.belongsTo(Seller, { foreignKey: "sellerId" });

module.exports = Tool;
