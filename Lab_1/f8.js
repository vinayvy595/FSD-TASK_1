function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(5);

console.log(circle1.getArea());

console.log(circle1.__proto__ === Circle.prototype);

circle1.__proto__.getCircumference = function () {
    return 2 * Math.PI * this.radius;
};

console.log(circle1.getCircumference());

const circle2 = new Circle(10);

console.log(circle2.getArea());
console.log(circle2.getCircumference());

console.log(circle2.__proto__ === Circle.prototype); 
