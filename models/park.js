module.exports = function(sequelize, DataTypes){

    let Park = sequelize.define("park", {
        //park data
        id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parkCode: DataTypes.STRING,
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        lat: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        long: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        reservationInfo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        reservationUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        regulations: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        directions: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        directionsUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        weatherOverview: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        numberOfSitesReservable: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberOfSitesFirstComeFirstServe: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Park.associate = function(models){
        Park.hasMany(models.accessibility, {
            onDelete: "cascade"
        });
        Park.hasMany(models.addresses, {
            onDelete: "cascade"
        });
        Park.hasMany(models.campsites, {
            onDelete: "cascade"
        });
        Park.hasMany(models.contactInfo, {
            onDelete: "cascade"
        });
        Park.hasMany(models.fees, {
            onDelete: "cascade"
        });
        Park.hasMany(models.operatingHours, {
            onDelete: "cascade"
        });
        Park.hasMany(models.reservation, {
            onDelete: "cascade"
        });
    };

    return Park;
};