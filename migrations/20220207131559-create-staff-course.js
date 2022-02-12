'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('staffCourses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      staffId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true,
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