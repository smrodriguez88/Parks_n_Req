module.exports = function(sequelize, DataTypes){

    let Camp = sequelize.define("Camp", {
        //GENERAL INFO
        id: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
        url: {type: DataTypes.STRING, allowNull: true},
        name: {type: DataTypes.STRING, allowNull: false},
        parkCode: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.TEXT, allowNull: false},
        reservationInfo: {type: DataTypes.TEXT, allowNull: false},
        regulations: {type: DataTypes.TEXT, allowNull: false},
        numberOfSitesReservable: {type: DataTypes.INTEGER, allowNull: false},
        numberOfSitesFirstComeFirstServe: {type: DataTypes.INTEGER, allowNull: false},
        //ACCESSIBILITY
        wheelchairAccess: {type: DataTypes.TEXT, allowNull: false},
        internetInfo: {type: DataTypes.STRING, allowNull: true},
        cellPhoneInfo: {type: DataTypes.STRING, allowNull: true},
        fireStovePolicy: {type: DataTypes.TEXT, allowNull: true},
        rvAllowed: {type: DataTypes.INTEGER, allowNull: true},
        rvInfo: {type: DataTypes.TEXT, allowNull: true},
        rvMaxLength: {type: DataTypes.INTEGER, allowNull: true},
        additionalInfo: {type: DataTypes.TEXT, allowNull: true},
        trailerMaxLength: {type: DataTypes.INTEGER, allowNull: true},
        adaInfo: {type: DataTypes.TEXT, allowNull: true},
        trailerAllowed: {type: DataTypes.INTEGER, allowNull: true},
        accessRoads: {type: DataTypes.JSON, allowNull: true},
        classifications: {type: DataTypes.JSON, allowNull: true},
        //ADDRESS INFO
        postalCode: {type: DataTypes.INTEGER, allowNull: true},
        city: {type: DataTypes.STRING, allowNull: true},
        stateCode: {type: DataTypes.STRING, allowNull: true},
        line1: {type: DataTypes.STRING, allowNull: true},
        line2: {type: DataTypes.STRING, allowNull: true},
        line3: {type: DataTypes.STRING, allowNull: true},
        //AMENITIES
        trashRecyclingCollection: {type: DataTypes.STRING, allowNull: true},
        toilets: {type: DataTypes.JSON, allowNull: true},
        internetConnectivity: {type: DataTypes.STRING, allowNull: true},
        Showers: {type: DataTypes.JSON, allowNull: true},
        cellPhoneReception: {type: DataTypes.STRING, allowNull: true},
        laundry: {type: DataTypes.STRING, allowNull: true},
        amphitheater: {type: DataTypes.STRING, allowNull: true},
        dumpStation: {type: DataTypes.STRING, allowNull: true},
        campStore: {type: DataTypes.STRING, allowNull: true},
        staffOrVolunteerHostOnsite: {type: DataTypes.STRING, allowNull: true},
        potableWater: {type: DataTypes.JSON, allowNull: true},
        iceAvailableForSale: {type: DataTypes.STRING, allowNull: true},
        firewoodForSale: {type: DataTypes.STRING, allowNull: true},
        foodStorageLockers: {type: DataTypes.STRING, allowNull: true},
        //CAMPSITES
        totalSites: {type: DataTypes.INTEGER, allowNull: true},
        //CONTACT INFO
        phoneNumber: {type: DataTypes.STRING, allowNull: true},
        email: {type: DataTypes.STRING, allowNull: true},
        //FEES
        cost: {type: DataTypes.DECIMAL, allowNull: true},
        feeDescription: {type: DataTypes.TEXT, allowNull: true},
        title: {type: DataTypes.STRING, allowNull: true},
        //OPERATING HOURS
        exceptions: {type: DataTypes.JSON, allowNull: true},
        hoursDescription: {type: DataTypes.TEXT, allowNull: true},
        standardHours: {type: DataTypes.JSON, allowNull: true}
    });

    Camp.associate = function(models){
        Camp.hasMany(models.Reservation, {
            onDelete: "cascade"
        });
    };

    return Camp;
};