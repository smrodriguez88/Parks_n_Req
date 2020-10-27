let Reservation = sequelize.define("reservation", {
    uuid: Sequelize.STRING,
    date: sequelize.DATE,
    parkID: Sequelize.STRING
});
