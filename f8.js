const colors = ['red', 'green', 'blue', 'yellow'];

// Extracting the first and second elements
const [firstColor,,secondColor] = colors;
console.log(firstColor);  
console.log(secondColor); 

// Extracting the second and fourth elements
const [, secondElement, , fourthElement] = colors;
console.log(secondElement); 
console.log(fourthElement); 
