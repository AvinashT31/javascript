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

// let number = [1,2,3,4,5];
// let sum = 0;
// let reducefuntion = number.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
// console.log(reducefuntion)


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


// callback function

// 1.  function onefunction(callback) {
//     console.log("hey Avinash");
//     callback();
//     console.log("bye avinash");
// }

// function secondfunction() {
//     console.log("hello guys");
// }

// onefunction(secondfunction)

// 2.
// function onefunction(callback) {
//     setTimeout(() => {
//         console.log("hello avinash");
//         callback();
//     }, 3000);
// }

// function secondfunction(){
//     console.log("how are you avinash");
// }

// onefunction(secondfunction);


// setInterval function

// setInterval(() => {
//     console.log("hey guys")
// }, 2000);


// setTimeout function

// setTimeout(() => {
//     console.log("bye Avinash");
// }, 2000);


// for loop
// print a array in reverse order

// let array = [1,2,3,4,5];
// for(let i = array.length - 1; i>=0; i--){
//     console.log(array[i]);
// }

// print a number in reverse order

// let array = 123458;
// let string = array.toString();
// let stringone = string;
// reversenumber = "";
// for(let i = stringone.length - 1; i >= 0; i--){
//     reversenumber += stringone[i];
// }
// console.log(reversenumber);


// do while loop

// print a array in reverse order
// let array = [1, 2, 3, 4, 5];
// let i = array.length - 1;

// do {
//     console.log(array[i]);
//     i--
// } while (i >= 0)


// print a number in reverse order
// let array = 123458;
// let string = array.toString();
// let i = string.length - 1;  
// let reversenumber = ""

// do {
//     reversenumber += string[i];
//     i--
// } while (i >= 0)
// console.log(parseInt(reversenumber));


// while loop

// print a array in reverse order
// let array = [1, 2, 3, 4, 5];
// let i = array.length - 1;

// while(i >= 0){
//     console.log(array[i]);
//     i--
// }

// print a number in reverse order
// let array = 123458;
// let string = array.toString();
// let i = string.length - 1;
// let reversenumber = "";

// while(i >= 0){
//     reversenumber += string[i];
//     i--;
// }
// console.log(parseInt(reversenumber));



// print a number from 1 to 5;
// let i = 1
// while (i <= 5) {
//     console.log(i);
//     i++
// }


// synchronous code example

// console.log("start");

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("end");


// asynchronous code example

// console.log("start");

// setTimeout(() => {
//     console.log("time");
// }, 1000);

// console.log("end");


function outer(){
    let message = "hello guys"
    
    function inner(){
        console.log(message);
    }
    return inner;
}

const closure = outer();
closure();



