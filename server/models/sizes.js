module.exports = (sequelize, DataTypes) =>
  sequelize.define('Sizes', {
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {})