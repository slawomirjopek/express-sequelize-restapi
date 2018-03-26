module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define('Reports', {
    occupancy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  }, {})

  Reports.associate = models => {
    Reports.hasOne(models.companies, {
      foreignKey: 'id',
      as: 'company_id',
    })
  }

  return Reports
}
