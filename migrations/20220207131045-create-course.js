'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('courses', {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      course_name: {
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
    await queryInterface.dropTable('courses');
  }
};