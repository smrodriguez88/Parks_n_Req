const qs = require('qs')
const axios = require('axios')

async function getCampsites(){
    let results = ''
    const options = {
        method: 'get',
        url: 'https://developer.nps.gov/api/v1/campgrounds?stateCode=tx&limit=1000',
        headers: {'X-Api-Key': ''},
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
        campgroundParse(results.data)
        return results.data
    } else {
        console.log('No results for campground request')
    }
    
}

function campgroundParse(data){
    CampgroundData = []
    for(each of data.data){
        let {url, 
            name, 
            id, 
            parkCode, 
            description, 
            latitude, 
            longitude, 
            reservationInfo, 
            reservationUrl, 
            regulationsOverview, 
            amenities, 
            contacts, 
            fees,
            directionsOverview,
            directionsUrl,
            operatingHours,
            addresses,
            weatherOverview,
            numberOfSitesReservable,
            numberOfSitesFirstComeFirstServe,
            campsites,
            accessibility} = each
        console.log(url)
        console.log(name)
        console.log(id)
        console.log(parkCode)
        console.log(description)
        console.log(latitude)
        console.log(longitude)
        console.log(reservationInfo)
    }
}

getCampsites()