'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('staffCourses', {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      staff_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      course_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('staffCourses');
  }
};