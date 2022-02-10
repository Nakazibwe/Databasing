'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,

    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'role',
  });
  role.associate = (models) => {
    role.hasOne(models.staff, {

    });
  }
  return role;
};