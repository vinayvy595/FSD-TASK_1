const matrix = [[1, 2], [3, 4], [5, 6]];

// Using array destructuring to extract 3 and 5
const [, [three], [five]] = matrix;

console.log(three); 
console.log(five);  
