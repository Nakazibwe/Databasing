'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,

    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'course',
  });
  course.associate = (models) => {
    course.hasMany(models.staffCourse, {

    });
  }
  return course;
};