const request = require('request');


var getWeather = (lat , lng , callback) => {
    request({
        url:`https://api.darksky.net/forecast/15d3a44ab1977f28e121311493a0303d/${lat},${lng}`,
        json : true
    } , (error , response , body)=> {
    
        if(error){
            callback('Unable to connect to forecast.io server');
        }else if(response.statusCode === 400){
             callback('Unable to fetch the weather');
        }else if (!error && response.statusCode === 200){
            callback(undefined , {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });

    
        }
    
        
    
    });

}

module.exports.getWeather = getWeather;