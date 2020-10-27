module.exports = function(sequelize, DataTypes){

    let Camp = sequelize.define("camp", {
        //Camp data
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

    Camp.associate = function(models){
        Camp.hasMany(models.accessibility, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.addresses, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.amenities, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.campsites, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.contactInfo, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.fees, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.operatingHours, {
            onDelete: "cascade"
        });
        Camp.hasMany(models.reservation, {
            onDelete: "cascade"
        });
    };

    return Camp;
};