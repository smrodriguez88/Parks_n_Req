module.exports = function(sequelize, DataTypes){

    let Park = sequelize.define("park", {
        //GENERAL INFO
        url: {type: DataTypes.STRING, allowNull: true},
        fullName: {type: DataTypes.STRING, allowNull: false},
        id: {type: DataTypes.STRING, allowNull: false},
        parkCode: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.TEXT, allowNull: false},
        //ADDRESS INFO
        postalCode: {type: DataTypes.INTEGER, allowNull: true},
        city: {type: DataTypes.STRING, allowNull: true},
        stateCode: {type: DataTypes.STRING, allowNull: true},
        line1: {type: DataTypes.STRING, allowNull: true},
        line2: {type: DataTypes.STRING, allowNull: true},
        line3: {type: DataTypes.STRING, allowNull: true},
        //CONTACT INFO
        phoneNumber: {type: DataTypes.STRING, allowNull: true},
        email: {type: DataTypes.STRING, allowNull: true},
        //ENTRANCE FEES
        cost: {type: DataTypes.DECIMAL, allowNull: true},
        description: {type: DataTypes.TEXT, allowNull: true},
        //ENTRANCE PASSES
        passCost: {type: DataTypes.DECIMAL, allowNull: true},
        passDescription: {type: DataTypes.TEXT, allowNull: true},
        //OPERATING HOURS
        exceptions: {type: DataTypes.JSON, allowNull: true},
        description: {type: DataTypes.TEXT, allowNull: true},
        standardHours: {type: DataTypes.JSON, allowNull: true}
    });

    return Park;
};