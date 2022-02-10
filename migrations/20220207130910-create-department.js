'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('departments', {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      department_name: {
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
    await queryInterface.dropTable('departments');
  }
};