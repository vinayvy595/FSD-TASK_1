class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);

console.log("The area of the rectangle is:", myRectangle.area());
