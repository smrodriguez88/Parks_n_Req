module.exports = function(sequelize, DataTypes) {
    let Accessibility = sequelize.define("accessibility", {
        //accessibility data
    });

    Accessibility.associate = function(models) {
        Accessibility.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Accessibility;
};