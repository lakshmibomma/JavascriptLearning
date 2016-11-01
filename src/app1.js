class Drone
{
    /********Constructor*********/
    constructor(id,name)
    {
        //instance properties
        this._id = id;
        this.name = name;
    }

    //Getter
    get id()
    {
        return this._id + ' Temporary';
    }
    //setter
    set id(value)
    {
        this._id = value;
    }

    /********Methods*********/

    //Instance method
    fly()
    {
        console.log('Drone ' + this.id + ' is flying');
    }

    //Static method
    static getCompany()
    {
        console.log('in getCompany');
    }
}
//Static access
Drone.maxHeight = 2000; //static properties
console.log(Drone.maxHeight);
console.log(Drone.getCompany());

//Instance access
let drone = new Drone('A123','Flyer');
drone.id = '12345'; //setting value
console.log(drone.id); //getting value
console.log(drone.name);
drone.fly();

