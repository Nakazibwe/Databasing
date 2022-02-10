'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('staffs', {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.STRING
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department_id: {
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
    await queryInterface.dropTable('staffs');
  }
};