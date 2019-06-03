const request = require("request")

const url = "https://api.darksky.net/forecast/00439f7d715fa0ba1182b356d313eb02/37.8267,-122.4233"

request({url:url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})