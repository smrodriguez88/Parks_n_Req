const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

let Park = sequelize.define("park", {
    //park data
    id: Sequelize.STRING,
    url: Sequelize.STRING,
    name: Sequelize.STRING,
    parkCode: Sequelize.STRING,
    description: Sequelize.TEXT,
    lat: Sequelize.DECIMAL,
    long: Sequelize.DECIMAL,
    reservationInfo: Sequelize.TEXT,
    reservationUrl: Sequelize.STRING,
    regulations: Sequelize.TEXT,
    directions: Sequelize.TEXT,
    directionsUrl: Sequelize.STRING,
    weatherOverview: Sequelize.TEXT,
    numberOfSitesReservable: Sequelize.INTEGER,
    numberOfSitesFirstComeFirstServe: Sequelize.INTEGER,


});

let ContactInfo = sequelize.define("contactInfo", {
    //contacts data
});

let fees = sequelize.define("fees", {
    //fees data
});

let operatingHours = sequelize.define("operatingHours", {
    //Hours data
});

let adresses = sequelize.define("addresses", {
    //Adress data
});

let campsites = sequelize.define("campsites", {
    //campsite data
});

let accessibility = sequelize.define("accessibility", {
    //accessibility data
});

let userInfo = sequelize.define("userInfo", {
    uuid: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING
})

let Reservation = sequelize.define("reservation", {
    uuid: Sequelize.STRING,
    date: sequelize.STRING,
    parkID: Sequelize.STRING
});

