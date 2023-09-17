// Q. 1 Write a function that takes an array of integers and returns the sum of all the elements in the array.

// let array = [1,2,3,4,5,6,7,8]
// sum = 0;
// for (let i = 0; i < array.length; i++){
//     sum += array[i];
// }console.log(sum);


// Q. 2 Write a function that takes an array of integers and returns the maximum value in the array.

// let array = [1,2,35,10,5,35,20];
// let maxnumber = array[0];
// for(let i =0; i < array.length; i++){
//     if(array[i] > maxnumber){
//         maxnumber = array[i];
//     }
// }console.log(maxnumber)


// Q. 3 Write a function that takes an array of integers and returns the minimum value in the array.

// let array = [17, 15, 35, 10, 5, 35, 20]
// let minimum = array[0];
// for (let i = 0; i < array.length; i++){
//     if(array[i] < minimum){
//         minimum = array[i]
//     }
// }console.log(minimum);


// Q. 4 Write a function that takes an array of integers and returns a new array that contains only the even numbers in the original array.

// let array = [1,2,50,7,8,10,33,45];
// let evenarray = [];
// for(let i = 0 ; i < array.length; i++){
//     if(array[i] % 2 ===0){
//         evenarray.push(array[i]);
//     }
// }console.log(evenarray);


// Q. 5 Write a function that takes an array of integers and returns a new array that contains only the odd numbers in the original array.

// let array = [1,2,50,7,8,10,33,45];
// let oddarray = [];
// for (let i =0; i < array.length; i++){
//     if(array[i] % 2 === 1){
//         oddarray.push(array[i]);
//     }
// }console.log(oddarray);


// Q. 6 Write a function that takes an array of integers and returns the average value of the elements in the array. 

// let array = [1,2,50,7,8,10,33,45];
// let sum = 0;
// for (let i =0; i< array.length; i++){
//     sum += array[i];
// }
// console.log(sum);
// let average = sum / array.length;
// console.log(average);


// Q. 7 Write a function that takes an array of integers and returns the number of elements in the array that are greater than a given value.

// let array = [1, 5, 2, 3, 4, 2];
// let value = 2;
// let count = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > value) {
//         count++;
//     }
// } console.log(count);


// Q. 8 Write a function that takes two arrays of integers and returns a new array that contains the elements that appear in both arrays.

// let array1 = [1,2,5,3,5,4];
// let array2 = [1,2,5,3,9,8];
// let newarray = [];

// for(let i = 0; i < array1.length; i++){
//     for(let j = 0; j < array2.length; j++){
//         if(array1[i] == array2[j]){
//             if(!newarray.includes(array1[i])){
//                 newarray.push(array1[i]);
//             }
//         }
//     }
// }console.log(newarray);


// Q. 9 Write a function that takes an array of integers and returns a new array that contains the elements of the original array in reverse order.

// let array = [1,2,5,3,9,8];
// for(let i = array.length-1; i >= 0; i--){
//     console.log(array[i]);
// }


// Q. 10 Write a function that takes an array of integers and returns a new array that contains the cumulative sum of the elements in the original array

// let array = [1,2,5,3,9,8];
// let currentsum = 0;
// let cumulativesum = [];
// for(let i = 0; i < array.length; i++){
//     currentsum +=array[i];
//     cumulativesum.push(currentsum);
// }
// console.log(cumulativesum);
// console.log(currentsum)


// Q. 11 Write a function that takes two arrays of integers and returns a new array that contains the sum of both arrays combined.

// let arr1 = [1,2,3,4,5,6,7,8,9]
// let arr2 = [4,5,6,7,8,9,1,2,3]
// let sum = [];
// for(let i=0; i < Math.max(arr1.length, arr2.length); i++){
//     let sum1 = arr1[i];
//     let sum2 = arr2[i];
//     sum.push(sum1 + sum2);
// }console.log(sum);


// Q.11 Write a program that creates an array of 5 integers and then prints each element of the array.

// let array = [1,2,3,4,5];
// for(let i =0; i < array.length; i++){
//     console.log(array[i]);
// }


// Q.12 Write a program that creates an array of 7 integers and then prints the largest value in the array.

// let array = [1,2,3,4,5,6,7];
// let maxnumber = array[0];
// for(let i = 0; i <array.length; i++){
//     if(array[i] > array[0]){
//         maxnumber = array[i];
//     }
// }console.log(maxnumber);


// Q.13 Write a program that creates an array of 15 integers and then finds and prints the index of the first occurrence of the value 10 in the array.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let arrayindex = array.indexOf(10);
// console.log(arrayindex);


// Q.14 Write a program that creates an array of 20 integers and then calculates and prints the average of all the values in the array.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20];
// let sum = 0
// for(let i=0; i<array.length; i++){
//     sum += array[i];
// }
// let average = sum / array.length;
// console.log(average);


// Q.15 Write a program that creates an array of 25 integers and then finds and prints the index of the last occurrence of the value 5 in the array.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25];
// const lastIndex = array.lastIndexOf(5);
// console.log(lastIndex);


// Q. 16 print a number in reverse

// let number = 18745;
// let string = number.toString();
// let reverse = "";
// for(let i = string.length - 1 ; i>0; i--){
//         reverse += string[i];
// }
// console.log(parseInt(reverse));


// Q. 17 print a string in reverse order

// let string = "i am Avinash";
// let string1 = string.split("");
// let reverse = string1.reverse().join("");
// console.log(reverse);


// Q. 18 Input: nums = [2, 7, 11, 15], target = 9
// Output: [0,1]

// let nums = [2, 7, 11, 15],
// target = 9
// let array = []
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] == target) {
//             array.push(i, j)
//         }
//     }
// } console.log(array);

// Q.19 Remove duplicate character from string

// var x = "hello worldd"
// var result = ""

// for (var i = 0; i < x.length; i++) {
//     var char = x[i]
//     // console.log(char);

//     if (result.indexOf(char) === -1) {
//         result += char;
//     }
// }
// console.log(result)










