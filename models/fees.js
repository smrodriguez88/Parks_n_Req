
module.exports = function(sequelize, DataTypes) { 
    let Fees = sequelize.define("fees", {
        //fees data
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