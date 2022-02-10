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
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,

    },
    staff_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },
    });
    staffCourse.belongsTo(models.course, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  }
  return staffCourse;
};