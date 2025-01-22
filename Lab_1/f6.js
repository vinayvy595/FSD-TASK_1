function Person(name, age) {
    this.name = name;
    this.age = age;

    this.describe = function () {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}

function Student(name, age, grade) {
    Person.call(this, name, age);

    this.grade = grade;

    this.study = function () {
        return `${this.name} is studying for grade ${this.grade}.`;
    };
}

const person1 = new Person("John", 30);
const student1 = new Student("Alice", 22, "A");
const student2 = new Student("Bob", 19, "B");

console.log(person1.describe());

console.log(student1.study());
console.log(student2.study()); 
