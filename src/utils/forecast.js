const request = require('request')

// 
// request( {url: url, json: true}, (error, response) => {

//     if(error) {
//         console.log("Unable to connect to the weather app")
//     } else if(response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.daily.data[0].summary + " It is currently " + temp + " degrees out. There is a " + rainProb + "% chance of rain.")
//     }
    
// }) 


const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/3990cd51ecc55694d46b994abefe4b2e/' + latitude + ',' + longitude

    request({url, json:true}, (error, {body}) => {
        if(error) {
            message = 'Unable to connect to the weather app'
            callback(message, undefined)
        } else if(body.error) {
            message = 'Unable to find location'
            callback(message, undefined)
        } else {
            callback(undefined, 
                // summary: response.body.daily.data[0].summary,
                //temp = response.body.currently.temperature,
                // rainProb = response.body.currently.precipProbability
                
                body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees Fahrenheit out. The high tody is " + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + ". There is a " + body.currently.precipProbability + "% chance of rain."
            )
        }
    })
}

module.exports = forecast