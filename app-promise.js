const yargs = require('yargs')
const axios = require('axios'); 


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

  var encodedAddress = encodeURIComponent(argv.address);
  var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,

  axios.get(geocodeUrl).then((response) => {
       console.log(response.data);
  });
// 15d3a44ab1977f28e121311493a0303d



