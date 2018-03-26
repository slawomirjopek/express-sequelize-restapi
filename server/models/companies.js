module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nip: DataTypes.STRING,
  }, {})

  Companies.associate = models => {
    Companies.hasOne(models.voivodeships, {
      foreignKey: 'id',
      as: 'voivodeship_id',
    })
    Companies.hasOne(models.cities, {
      foreignKey: 'id',
      as: 'city_id',
    })
    Companies.hasOne(models.sizes, {
      foreignKey: 'id',
      as: 'size_id',
    })
  }

  return Companies
}
