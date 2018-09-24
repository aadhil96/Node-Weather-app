 const yargs = require('yargs');

 const geocode = require('./geocode/geocode');
 const weather = require('./weather/we');

 const argv = yargs
   .options({
     a: {
       demand: true,
       alias: 'address',
       describe: 'Address to fetch weather for',
       string: true
     }
  })
   .help()
   .alias('help', 'h')
   .argv;

 geocode.geocodeAddress(argv.address, (errorMessage, results) => {
   if (errorMessage) {
     console.log(errorMessage);
   } else {
     console.log(results.address); 
     weather.getWeather( results.latitude,results.longitude,(errorMessage , weatherResults) => {
        if(errorMessage){
            cosole.log(errorMessage);
        }else {
            console.log(`It's currently ${weatherResults.temperature} . Its feel like ${weatherResults.apparentTemperature}`)
        }
    }); 
   }
 });


// 15d3a44ab1977f28e121311493a0303d



