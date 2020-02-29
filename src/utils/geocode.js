const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicHJheWFzZHJvbGlhIiwiYSI6ImNrNnE3eGY0azBrN2wzZXFsbjVudHk0NGcifQ.6rYUIzMiTgfoxPDWI9QPug&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            message = 'Unable to connect to location services'
            callback(message, undefined)
        } else if(body.features.length === 0) {
            message='Unable to find the location'
            callback(message, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode