let userInfo = sequelize.define("userInfo", {
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