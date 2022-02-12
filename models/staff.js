'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staff.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,

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
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey:true,
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey:true,
    }
  }, {
    sequelize,
    modelName: 'staff',
  });
  staff.associate = (models) => {
    staff.belongsTo(models.role, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
    staff.belongsTo(models.department, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
    staff.hasMany(models.staffCourse, {

    });
  };
  return staff;
};