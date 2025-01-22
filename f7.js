const person = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        zip: '90001'
    },
    age: 25
};

// Using object destructuring to extract street and city
const { address: { street, city } } = person;

console.log(street); 
console.log(city);   
