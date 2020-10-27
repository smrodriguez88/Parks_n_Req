module.exports = function(sequelize, DataTypes) {
    let UserInfo = sequelize.define("userInfo", {
        uuid: Sequelize.STRING,
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: Sequelize.STRING,
        email: Sequelize.STRING
    })

    UserInfo.associate = function(models) {
        UserInfo.belongsTo(models.Reservation, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return UserInfo;
};