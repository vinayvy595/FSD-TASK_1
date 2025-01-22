function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    this.study = function () {
        console.log(`${this.name} is studying.`);
    };

    this.getGrade = function () {
        return this.grade;
    };
}

const student1 = new Student("Alice", "A");
const student2 = new Student("Bob", "B");
const student3 = new Student("Charlie", "C");

student1.study();
student2.study();
student3.study();

console.log(`${student1.name}'s grade: ${student1.getGrade()}`);
console.log(`${student2.name}'s grade: ${student2.getGrade()}`);
console.log(`${student3.name}'s grade: ${student3.getGrade()}`); 
