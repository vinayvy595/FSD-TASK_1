function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };

    this.isAdult = function () {
        return this.age >= 18;
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 16);

person1.greet();
person2.greet();

console.log(`${person1.name} is an adult: ${person1.isAdult()}`);
console.log(`${person2.name} is an adult: ${person2.isAdult()}`); 
