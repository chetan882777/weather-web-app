const request = require("request")

const forecast = function (latitude, longitude, callback) {

    const url = "https://api.darksky.net/forecast/00439f7d715fa0ba1182b356d313eb02/" +latitude + ","  + longitude + ""

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find coordinates. Try another search', undefined)
        } else {
            callback(undefined , {
                data : response.body.currently
            })
        }
    })
}

module.exports = forecast