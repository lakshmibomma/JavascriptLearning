class Drone
{
    /********Constructor*********/
    constructor(id,name)
    {
        //instance properties
        this.id = id;
        this.name = name;
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
console.log(drone.id);
console.log(drone.name);
drone.fly();

