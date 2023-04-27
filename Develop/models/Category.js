// Set up sequelize packages for Model, and DataTypes.
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}
// Initialize the Category model with its properties and options
Category.init(
  {
   // The ID property is an auto-incrementing integer and the primary key for the model 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // The category_name property is a required string that stores the name of the category
    category_name: {

      type: DataTypes.STRING,
      allowNull: false,
      
      },
    
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
