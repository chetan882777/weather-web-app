const request = require("request")

const url = "https://api.darksky.net/forecast/00439f7d715fa0ba1182b356d313eb02/37.8267,-122.4233"

request({url:url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})

const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Barwani.json?access_token=pk.eyJ1IjoiY2hldGFucGF3YXIiLCJhIjoiY2p3Z3R0MDhoMGNxdjQwbGJnajM2ZHo4byJ9.5azLiuRBvbXvy3xE0tDovw"

request({url:geoUrl}, (error, response) => {
    const data2 = JSON.parse(response.body)
    const lang = data2.features[0].center[0]
    const lat = data2.features[0].center[1]

    console.log("lat " + lat + ", lang " + lang)
})
