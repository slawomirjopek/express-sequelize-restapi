module.exports = (sequelize, DataTypes) => 
  sequelize.define('Voivodeships', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {})
