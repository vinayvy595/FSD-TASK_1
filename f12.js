function createProfile({ name, email }) {
    return { name, email };
}


const userInput = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com',
    address: '123 Main St, Springfield'
};


const profile = createProfile(userInput);


console.log(profile);
