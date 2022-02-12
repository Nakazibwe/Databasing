'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staffCourse.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'staffCourse',
  });
  staffCourse.associate = (models) => {
    staffCourse.belongsTo(models.staff, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
    staffCourse.belongsTo(models.course, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
  }
  return staffCourse;
};