var jsonexport = require('jsonexport');
var fs = require('fs');

const CITIES_JSON_FILE_NAME = './history.city.list.json';
const CITIES_CSV_FILE_NAME = './open_weather_cities.csv';

var reader = fs.createReadStream(CITIES_JSON_FILE_NAME);
var writer = fs.createWriteStream(CITIES_CSV_FILE_NAME,  { encoding: 'utf8' });
 
reader.pipe(jsonexport()).pipe(writer);

