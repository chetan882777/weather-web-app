const request = require("request")
const geoCode = require("./utils/geocode")
const forecast = require("./utils/forcast")

if (process.argv.length < 3) {
    return console.log("Name of place required!")
} else {
    geoCode(process.argv[2], (error, {latitude, longitude, location}) => {

        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, {data}) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(data)
        })
    })
}
