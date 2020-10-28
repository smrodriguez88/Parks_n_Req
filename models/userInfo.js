module.exports = function(sequelize, DataTypes) {
    let UserInfo = sequelize.define("userInfo", {
        uuid: DataTypes.UUID,
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: DataTypes.STRING,
        email: DataTypes.STRING
    })

    UserInfo.associate = function(models) {
        UserInfo.belongsTo(models.reservation, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return UserInfo;
};