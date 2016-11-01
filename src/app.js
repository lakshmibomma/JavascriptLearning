class Vehicle
{
    /** Super class constructor */
    constructor(licenseNum)
    {
        this.licenseNum = licenseNum;
        this.gpsEnabled = true;
        console.log('constructing Vehicle');
    }

   /*Method*/
    start()
    {
        console.log('starting Vehicle');
    }
    /**class method/static method */
    static getCompanyName()
    {
        console.log('My Company');
    }

}
class Drone extends Vehicle
{

}
class Car extends  Vehicle
{
    constructor(licenseNum)
    {
        super(licenseNum); //Super class constructor called first..
        this.gpsEnabled = false;
        super.start(); //Super class method can be called  at any time in extended class
    }
     /*Overridden Method*/
    start()
    {
        console.log('starting Car');
    }

    /**class method/static method can be overridden*/
    static getCompanyName()
    {
        super.getCompanyName(); //we can super class static method in derived class
        console.log('My Other Company');
    }

}
let c =  new Car('A123');
console.log(c.licenseNum);
console.log(c.gpsEnabled);
c.start();
Car.getCompanyName();//Static methods can be accessable in derived class

