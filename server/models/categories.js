module.exports = (sequelize, DataTypes) => 
  sequelize.define('Categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {})