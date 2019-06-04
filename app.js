const request = require("request")
const geoCode = require("./utils/geocode")
const forecast = require("./utils/forcast")

if (process.argv.length < 3) {
    return console.log("Name of place required!")
} else {
    geoCode(process.argv[2], (error, data) => {

        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData.data)
        })
    })
}
