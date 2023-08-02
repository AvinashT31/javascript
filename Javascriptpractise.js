// let x = "hello";
// let y = 10;
// let result = x + y;
// console.log(result); // Output: NaN

// Math.round method

// let number = 9.56;
// let roundnumber = Math.round(number);
// console.log(roundnumber);


// Map function

// let number = [1,2,3,4,5,6];

// let mapnumber = number.map((nums) => nums*2);
// console.log(mapnumber)


// Reduce function

let number = [1,2,3,4,5];
let sum = 0;
let reducefuntion = number.reduce((inititial, current) => inititial + current, 0);
console.log(reducefuntion)


//using for loop

// for(let i =0; i < number.length; i++){
//     sum += number[i];
// }console.log(sum);



// filter function

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let filternumber = number.filter((nums) => nums % 2 === 0);
// console.log(filternumber);


// spread opertor(...)

// let arrayone = [1, 2, 3, 4, 5];
// let arraytwo = [5,6, 7, 8, 9];
// let result = [...new Set([...arrayone, ...arraytwo])];  
// to remove the duplicates from array use (...new Set);
// console.log(result);


// const person = {
//     name: "avinash",
//     address:
//     {
//         city: "navi",
//         number: "1234",
//     }
// }
// console.log({ ...person, address: { ...person.address, city: "mumbai" }});