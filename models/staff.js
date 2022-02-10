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
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,

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
    }
  }, {
    sequelize,
    modelName: 'staff',
  });
  staff.associate = (models) => {
    staff.belongsTo(models.role, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
    staff.belongsTo(models.department, {
      foreignKey: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
    staff.hasMany(models.staffCourse, {

    });
  };
  return staff;
};