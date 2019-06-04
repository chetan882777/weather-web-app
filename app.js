const request = require("request")
const geoCode = require("./utils/geocode")


// const url = "https://api.darksky.net/forecast/00439f7d715fa0ba1182b356d313eb02/37.8267,-122.4233"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect!")
//     } else if(response.body.error){
//         console.log("Unable to find location")
//     }else {
//         console.log(response.body.currently)
//     }
// })


geoCode('Barwani', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

