'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        
      },
      staff_role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.DECIMAL,
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
    await queryInterface.dropTable('roles');
  }
};