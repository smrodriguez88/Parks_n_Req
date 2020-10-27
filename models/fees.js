
module.exports = function(sequelize, DataTypes) { 
    let Fees = sequelize.define("fees", {
      //fees data
      cost: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      title: DataTypes.STRING
    });

    Fees.associate = function(models) {
        Fees.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Fees;
};