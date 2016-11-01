import {Vehicle} from './vehicle.js';

export class Car extends  Vehicle
{
    constructor(license,model,latlong)
    {
        super(license,model,latlong);
        this.make = null;
        this.miles = null;
    }
}