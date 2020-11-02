var Sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
var db = require("../models");
const qs = require('qs')
const axios = require('axios');
let { each } = require("bluebird");
const dotenv = require("dotenv");
const config = require("../config/config.json")
dotenv.config();



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
    campgroundData = [];
    entry = {};
    for(each of data.data){
        entry = {'id': each.id, 
            'url': each.url, 
            'name': each.name, 
            'parkCode': each.parkCode, 
            'description': each.description, 
            'reservationInfo': each.reservationInfo, 
            'regulations': each.regulationsOverview, 
            'numberOfSitesReservable': each.numberOfSitesReservable,
            'numberOfSitesFirstComeFirstServe': each.numberOfSitesFirstComeFirstServe,
            'wheelchairAccess': each.accessibility.wheelchairAccess,
            'internetInfo': each.accessibility.internetInfo,
            'cellPhoneInfo': each.accessibility.cellPhoneInfo,
            'fireStovePolicy': each.accessibility.fireStovePolicy,
            'rvAllowed': each.accessibility.rvAllowed,
            'rvInfo': each.accessibility.rvInfo,
            'rvMaxLength': each.accessibility.rvMaxLength,
            'additionalInfo': each.accessibility.additionalInfo,
            'trailerMaxLength': each.accessibility.trailerMaxLength,
            'adaInfo':each.accessibility.adaInfo,
            'trailerAllowed':each.accessibility.trailerAllowed,
            'accessRoads':each.accessibility.accessRoads,
            'classifications':each.accessibility.classifications,
            'postalCode':each.addresses[0] ? each.addresses[0].postalCode : 0,
            'city':each.addresses[0] ? each.addresses[0].city : "none",
            'stateCode':each.addresses[0] ? each.addresses[0].stateCode : "none",
            'line1':each.addresses[0] ? each.addresses[0].line1 : "none",
            'line2':each.addresses[0] ? each.addresses[0].line2 : "none",
            'line3':each.addresses[0] ? each.addresses[0].line3 : "none",
            'trashRecyclingCollections': each.amenities.trashRecyclingCollections,
            'toilets': each.amenities.toilets,
            'internetConnectivity': each.amenities.internetConnectivity,
            'Showers': each.amenities.Showers,
            'cellPhoneReception': each.amenities.cellPhoneReception, 
            'laundry': each.amenities.laundry,
            'amphitheater': each.amenities.amphitheater,
            'dumpStation': each.amenities.dumpStation,
            'campStore': each.amenities.campStore,
            'staffOrVolunteerHostOnsite': each.amenities.staffOrVolunteerHostOnsite,
            'potableWater': each.amenities.potableWater,
            'iceAvailableForSale': each.amenities.iceAvailableForSale,
            'firewoodForSale': each.amenities.firewoodForSale,
            'foodStorageLockers': each.amenities.foodStorageLockers,
            'totalSites':each.campsites.totalSites,
            'phoneNumber': each.contacts.phoneNumbers[0] ? each.contacts.phoneNumbers[0].phoneNumber : "none",
            'email': each.contacts.emailAddresses[0] ? each.contacts.emailAddresses[0].emailAddress  : "none",
            'cost': each.fees[0] ? each.fees[0].cost : 0, 
            'feeDescription':each.fees[0] ? each.fees[0].description : "none",
            'title': each.fees[0] ? each.fees[0].title : "none",
            'exceptions': each.operatingHours[0] ? each.operatingHours[0].exceptions : "none",
            'hoursDescription': each.operatingHours[0] ? each.operatingHours[0].description : "none",
            'standardHours': each.operatingHours[0] ? each.operatingHours[0].standardHours : "none"}
        campgroundData.push(entry)
    };
    // console.log(campgroundData)
    db.Camp.bulkCreate(campgroundData)
};

function parksParse(data){
    parksData = [];
    entry = {};
    
    // console.log(data.data);
    for(each of data.data){           
            entry = {'url': each.url, 
                'id': each.id, 
                'fullName': each.fullName, 
                'parkCode': each.parkCode, 
                'description': each.description, 
                'postalCode': each.addresses[0] ? each.addresses[0].postalCode : 0, 
                'city': each.addresses[0] ? each.addresses[0].city : "none", 
                'stateCode': each.addresses[0] ? each.addresses[0].stateCode : "none", 
                'line1': each.addresses[0] ? each.addresses[0].line1 : "none", 
                'line2': each.addresses[0] ? each.addresses[0].line2 : "none", 
                'line3': each.addresses[0] ? each.addresses[0].line3 : "none", 
                'phoneNumber': each.contacts.phoneNumbers[0] ? each.contacts.phoneNumbers[0].phoneNumber : "none", 
                'email': each.contacts.emailAddresses[0] ? each.contacts.emailAddresses[0].emailAddress : "none",
                'feeDescription': each.entranceFees[0] ? each.entranceFees[0].description : "none",
                'passCost': each.entrancePasses[0] ? each.entrancePasses[0].cost : 0,
                'passDescription': each.entrancePasses[0] ? each.entrancePasses[0].description : "none",
                'exceptions': each.operatingHours[0] ? each.operatingHours[0].exceptions : "none",
                'hoursDescription': each.operatingHours[0] ? each.operatingHours[0].description : "none",
                'standardHours': each.operatingHours[0] ? each.operatingHours[0].standardHours : "none",
                'images': each.images ? each.images : "none"
            }
            console.log(entry)
            parksData.push(entry)
            
           
    }
    db.Park.bulkCreate(parksData)
}


async function init(){
    campgrounds = await getNpsInfo('campgrounds', 'tx', 100)
    campgroundParse(campgrounds)
    // console.log(campgrounds)
    parks = await getNpsInfo('parks', 'tx', 100)
    parksParse(parks)
}

init()


module.exports = router;