module.exports = function(sequelize, DataTypes) { 
    let ContactInfo = sequelize.define("contactInfo", {
        //contacts data
    });

    ContactInfo.associate = function(models) {
        ContactInfo.belongsTo(models.Park, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return ContactInfo;
};