'use strict';
const {
  Model
} = require('sequelize');
const { genSaltSync, hashSync } = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Customer,{
        foreignKey : 'userId',
        sourceKey : 'id', 
        onDelete : 'SET NULL' ,
        onUpdate : 'CASCADE'
      });
      User.hasMany(models.Agent,{
        foreignKey : 'userId',
        sourceKey : 'id',
        onDelete : 'SET NULL' ,
        onUpdate : 'CASCADE'
      });
      
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: {
      type : DataTypes.STRING,
      set(value) {
        const salt = genSaltSync(10);
        this.setDataValue('password', hashSync(value, salt));
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};