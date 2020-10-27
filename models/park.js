let Park = sequelize.define("park", {
    //park data
    id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parkCode: Sequelize.STRING,
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lat: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    long: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    reservationInfo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    reservationUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    regulations: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    directions: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    directionsUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    weatherOverview: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    numberOfSitesReservable: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numberOfSitesFirstComeFirstServe: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});