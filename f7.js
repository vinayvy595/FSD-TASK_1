function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getDetails = function () {
    return `${this.year} ${this.make} ${this.model}`;
};

function ElectricCar(make, model, year, batteryCapacity) {
    Car.call(this, make, model, year);

    this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getBatteryInfo = function () {
    return `Battery Capacity: ${this.batteryCapacity} kWh`;
};

const myCar = new Car("Toyota", "Camry", 2020);
const myElectricCar = new ElectricCar("Tesla", "Model S", 2021, 100);

console.log(myCar.getDetails());

console.log(myElectricCar.getDetails());

console.log(myElectricCar.getBatteryInfo()); 
