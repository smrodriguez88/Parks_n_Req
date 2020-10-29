// var Sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
var db = require("../models");
const qs = require('qs')
const axios = require('axios')

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }


async function getNpsInfo(resource, stateCode, receipt_limit){
    let results = ''
    const options = {
        method: 'get',
        url: `https://developer.nps.gov/api/v1/${resource}?stateCode=${stateCode}&limit=${receipt_limit}`,
        headers: {'X-Api-Key': process.env.PARKS_API_KEY},
        data: qs.stringify({'stateCode': 'tx','limit': '2'})
    }
    try {
        results = await axios(options)
    } catch (error) {
        console.log(error)
    }
    
    if (results){
        // for (each of results.data.data){
        //     console.log(each)
        // }
        return results.data
    } else {
        console.log('No results for campground request')
    }
    
}

function campgroundParse(data){
    CampgroundData = []
    for(each of data.data){
        let {id, 
            url, 
            name, 
            parkCode, 
            description, 
            reservationInfo, 
            regulations, 
            numberOfSitesReservable,
            numberOfSitesFirstComeFirstServe,
            wheelchairAccess,
            internetInfo,
            cellPhoneInfo,
            fireStovePolicy,
            rvAllowed,
            rvInfo,
            rvMaxLength,
            additionalInfo,
            trailerMaxLength,
            adaInfo,
            trailerAllowed,
            accessRoads,
            classifications,
            postalCode,
            city,
            stateCode,
            line1,
            line2,
            line3,
            trashRecyclingCollections,
            toilets,
            internetConnectivity,
            Showers,
            cellPhoneReception,
            laundry,
            amphitheater,
            dumpStation,
            campStore,
            staffOrVolunteerHostOnsite,
            potableWater,
            iceAvailableForSale,
            firewoodForSale,
            foodStorageLockers,
            totalSites,
            phoneNumber,
            email,
            cost,
            feeDescription,
            title,
            exceptions,
            hoursDescription,
            standardHours
            } = each
        console.log(name)
    };
};

function parksParse(data){
    parksData = []
    entry = {}
    console.log(data.data)
    for(each of data.data){
        console.log(`[${each.parkCode}] ${each.fullName}`)
    }
    // for(each of data.data){           
    //     if(each.url){
    //         entry['url']= each.url
    //     } else{
    //         entry['url']= "NA"
    //     }
    //     'id': each.id, 
    //     'fullName': each.fullName, 
    //     'parkCode': each.parkCode, 
    //     'description': each.description, 
    //     'postalCode': each.addresses[0].postalCode, 
    //     'city': each.addresses[0].city, 
    //     'stateCode': each.addresses[0].stateCode, 
    //     'line1': each.addresses[0].line1, 
    //     'line2': each.addresses[0].line2, 
    //     'line3': each.addresses[0].line3, 
    //     'phoneNumber': each.contacts.phoneNumbers[0].phoneNumber, 
    //     'email': each.contacts.emailAddresses[0].emailAddress,
    //     'cost': each.entranceFees[0].cost,
    //     'feeDescription': each.entranceFees[0].description,
    //     'passCost': each.entrancePasses[0].cost || NONE,
    //     'passDescription': each.entrancePasses[0].description,
    //     'exceptions': each.operatingHours[0].exceptions,
    //     'hoursDescription': each.operatingHours[0].description,
    //     'standardHours': each.operatingHours[0].standardHours}

            // entry = {'url': each.url, 
            //     'id': each.id, 
            //     'fullName': each.fullName, 
            //     'parkCode': each.parkCode, 
            //     'description': each.description, 
            //     'postalCode': each.addresses[0].postalCode, 
            //     'city': each.addresses[0].city, 
            //     'stateCode': each.addresses[0].stateCode, 
            //     'line1': each.addresses[0].line1, 
            //     'line2': each.addresses[0].line2, 
            //     'line3': each.addresses[0].line3, 
            //     'phoneNumber': each.contacts.phoneNumbers[0].phoneNumber, 
            //     'email': each.contacts.emailAddresses[0].emailAddress,
            //     'feeDescription': each.entranceFees[0].description,
            //     'passCost': each.entrancePasses[0].cost,
            //     'passDescription': each.entrancePasses[0].description,
            //     'exceptions': each.operatingHours[0].exceptions,
            //     'hoursDescription': each.operatingHours[0].description,
            //     'standardHours': each.operatingHours[0].standardHours}

            // parksData.push(entry)
            
            
            // db.Parks.bulkCreate(each)
    }
    // console.log(parksData)
// }


async function init(){
    campgrounds = await getNpsInfo('campgrounds', 'tx', 2)
    campgroundParse(campgrounds)
    parks = await getNpsInfo('parks', 'tx', 100)
    parksParse(parks)
}

init()


module.exports = router;