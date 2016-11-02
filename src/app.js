import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import $ from 'jquery';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-maps.js';

let headers = "License Make Model Miles".split(' ');
let dataService =  new FleetDataService(fleet);

let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.cars);
map.appendToElement($('body'));


// dataService.loadData(fleet);
// let dt =  new DataTable(headers,dataService.cars);
// dt.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));

// let tb = new TitleBar('Our Application');
// tb.addLink('Home','');
// tb.addLink('Cars','');
// tb.addLink('Drones','');
// tb.addLink('Maps','');

// tb.appendToElement($('body'));


// let dataService = new FleetDataService();
// dataService.loadData(fleet);
// console.log(dataService.cars);

// for (let car of dataService.cars)
//     console.log(car.license);


// for (let e of dataService.errors)
//     console.log(e.message);

// let car = dataService.getCarByLicense('AT9900');
// console.log(car);

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars)
// console.log(car.license)

// let cars = dataService.filterCarsByMake('e');
// for (let car of cars)
//   console.log(car.make);





