const request = require("request")

const url = "https://api.darksky.net/forecast/00439f7d715fa0ba1182b356d313eb02/37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect!")
    } else if(response.body.error){
        console.log("Unable to find location")
    }else {
        console.log(response.body.currently)
    }
})

const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Barwani.json?access_token=pk.eyJ1IjoiY2hldGFucGF3YXIiLCJhIjoiY2p3Z3R0MDhoMGNxdjQwbGJnajM2ZHo4byJ9.5azLiuRBvbXvy3xE0tDovw"

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect!")
    } else if(response.body.features.length === 0){
        console.log("Unable to find location")
    }else {
    
    const lang = response.body.features[0].center[0]
    const lat = response.body.features[0].center[1]

    console.log("lat " + lat + ", lang " + lang)
    }
})
