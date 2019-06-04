const request = require("request")
const geoCode = require("./utils/geocode")
const forecast = require("./utils/forcast")



// geoCode('Barwani', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

forecast(22.03 , 74.9s , (error , data) => {
    console.log('Error', error)
    console.log('Data', data)
})

