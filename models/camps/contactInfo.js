module.exports = function(sequelize, DataTypes) { 
    let ContactInfo = sequelize.define("contactInfo", {
      //Adress data
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING
    });

    ContactInfo.associate = function(models) {
        ContactInfo.belongsTo(models.Camp, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return ContactInfo;
};