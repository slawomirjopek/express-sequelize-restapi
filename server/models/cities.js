module.exports = (sequelize, DataTypes) =>
  sequelize.define('Cities', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {})
