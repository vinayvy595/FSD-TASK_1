class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

const genericAnimal = new Animal();
genericAnimal.speak();

const myDog = new Dog();
myDog.speak(); 
