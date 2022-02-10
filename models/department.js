'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  department.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,

    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'department',
  });
  department.associate = (models) => {
    department.hasMany(models.staff, {

    });
  }
  return department;
};