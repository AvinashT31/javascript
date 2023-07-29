// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. // return index

// function array() {
////     array = [];
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 array.push(i, j);
//             }
//         } return array;
//     }
// }
// var lans = array();
// console.log(lans)

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function array(){
//     array = [];
//     for(var i=0; i< nums.length; i++){
//         for(var j=i+1; j<nums.length; j++){
//             if(nums[i] + nums [j] === target){
//                 array.push(i, j);
//             }
//           }return array;
//     }
// }
// var output = array();
// console.log(output);

//   array = [];
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             array.push(i, j);
//         }
//     } 
// }console.log(array);


// Input: nums = [3,3], target = 6
// Output: [0,1]

// array = [];

// for(var i=0; i<nums.length; i++){
//     for(var j=i+1; j<nums.length; j++){
//         if(nums[i] + nums[j] === target){
//             // console.log(nums[i], nums[j]);
//             array.push(i, j);
//         }
//     }
// }console.log(array);




// Input: nums = [0,0,1,1,1,2,2,3,3,4,4,5,6,7]
// remove duplicate and unique value

// duplicate = [];
// unique = [];

// for(var i=0; i<nums.length; i++){
//     if(nums[i] === nums[i+1]){
//         duplicate.push(nums[i]);
//     }
//     else{
//         unique.push(nums[i]);
//     }
// }
// console.log(duplicate);
// console.log(unique);



// nums = [0,1,2,3,4,5,6,7,8,9];
// target = 5
// console.log(nums.splice(5,1));

// Array = [];

// for(var i =0; i< nums.length; i++){
//     if()
// }


// Question Write a function that takes an array of integers and returns the sum of all the elements in the array.

// var a = [1,2,3,4,5];
// var b = 0;

// for (var i=0; i<a.length; i++){
//     b += a[i];
// }
// console.log(b);



// Add the Element to last of the array  
// push = add the element in last element

// var a = [1,2,3,4,5];
// var b = 8;
// a.push(b);
// console.log(a);


// remove the Element from the array
// pop = remove the last Element from array 

// var a = [1,2,3,4,5];
// a.pop();
// console.log(a);



// Add the Element into first of the array  
// unshift = add the element in first element

// var a = [1,2,3,4,5];
// var b = 8;

// a.unshift(b);
// console.log(a);


// remvoe the Element into first of the array  
// shift = remove the element in first element

// var a = [1,2,3,4,5];

// a.shift();
// console.log(a);


// splice = to remove the item (2-index, 1-position)
// remove the element in the array using index

// var a = [1,2,3,4,5,6]
// a.splice(2,1);
// console.log(a);

// splice =  add the element in the array using index (2-index, 0-position, add 8 element)

// var a = [1,2,3,4,5];
// a.splice(2,0,8);
// console.log(a);



// Write a function that takes an array of integers and returns the maximum value in the array.

// var a = [1,2,3,4,5];
// var b = 0;
// for(var i =0; i < a.length; i++){
//     if(a[i]>b){
//         b=a[i];
//     }
// }console.log(b);


// using while loop
// var a = [1,2,3,4,5];
// var b = 0;
// var i = 0;

// while(i < a.length){
//     if(a[i] > b){
//         b = a[i];     
//     }
//     i++;   
// }console.log(b)


// Write a function that takes an array of integers and returns the minimum value in the array.

// var a = [100,2,3,4,5,6,7,8,9,10,11,12];
// var b= a[0];
// for(var i = 1; i<a.length; i++){
//     if(a[i]<b){
//         b=a[i];
//     }
// }console.log(b);


// Write a function that takes an array of integers and returns a new array that contains only the even numbers in the original array.

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// var even = [];
// var odd = [];
// for (var i = 0; i < num.length; i++) {
//     if(num[i]%2 == 0){
//         even.push(num[i]);
//     } else {
//         odd.push(num[i]);
//     }
// }

// console.log(even);
// console.log(odd);


// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// for(var i=0; i <num.length; i++){
//     console.log(i,":", num[i]);

// }

// Write a function that takes an array of integers and returns the average value of the elements in the array.

// var array = [1,2,3,4,5,6,7,8,9]
// var array1 = 0;

// for(var i=0; i<array.length; i++){
//      array1 += array[i];
// }console.log(array1/array.length);


// var array = [1,2,3,4,5,6,7,8,9]
// function average(array) {
//     var array1 = 0;
//     for(var i=0; i<array.length; i++){
//         array1 += array[i];
//    }
//    return array1/array.length;
// }
// console.log(average(array));

//Write a function that takes an array of integers and returns a new array that contains only the even numbers in the original array
// var array = [1,2,3,4,5,6,7,8,9,10,11]
// function even(array) {
//     var array1 = []
//     var i = 0;
//     while(i<array.length){
//         if(array[i] % 2 === 0){
//             array1.push(array[i])
//         }
//         i++
//     }
//     return array1;
// }
// console.log(even(array));

//Write a function that takes an array of integers and returns a new array that contains only the odd numbers in the original array.

// var array = [1,2,3,4,5,6,7,8,9,10,11]
// function odd(array){
//     var array1 = []
//     var i = 0;
//     do{
//         if(array[i] % 2 !== 0){
//             array1.push(array[i])
//         }
//         i++;
//     }while(i<array.length)
//     return array1;
// }
// console.log(odd(array));


// Write a function that takes an array of integers and returns the number of elements in the array that are greater than a given value.

// var num = [1,2,3,4,5,6,7,8,9]
// var target = 3
// var count = 0;

// for(var i =0; i< num.length; i++){
//     if(num[i] > target){
//         console.log(num[i]);
//         count++;
//     }
// }console.log(count);

// var num = [1,2,3,4,5,6,7,8,9]

// function greater(x){
//     var target = 3;
//     var count = 0;

//     for(var i=0; i<x.length; i++){
//         if(x[i] > target){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(greater(num));

// var num = [1,2,3,4,5,6,7,8,9]

// function greaterWhile(num){

//     var target = 3;
//     var count =0;
//     var i = 0;

//     while(i<num.length){
//         if(num[i] > target){
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// console.log(greaterWhile(num));






// To print Dec using Switch case
// var input = 12;
// switch (input) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("apr");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("jun");
//         break;
//     case 7:
//         console.log("jul");
//         break;
//     case 8:
//         console.log("aug");
//         break;
//     case 9:
//         console.log("sep");
//         break;
//     case 10:
//         console.log("oct");
//         break;
//     case 11:
//         console.log("nov");
//         break;
//     case 12:
//         console.log("dec");
//         break;
//     default:
//         console.log("none")
// }



// Q. Write a function that takes two arrays of integers and returns a new array that contains the sum of both arrays combined. 
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     arr2 = [4, 5, 6, 7, 8, 9, 1, 2, 3]
// Output = [5,7,9,11,13,15,8,10,12].

// function addition(arr1, arr2){
//     var output = [];

//     for(var i =0; i<arr1.length; i++){
//         output.push(arr1[i] + arr2[i]);

//     }
//     return output;
// }
// console.log(addition(arr1,arr2));

//Write a function that takes an array of integers and returns a new array that contains the elements of the original array in reverse order.
//  var a = [1,2,3,4,5,6]

// for(i=a.length-1; i>=0; i--){
//      console.log(a[i]);
// } 

// Write a function that takes two arrays of integers and returns a new array that contains the elements that appear in both arrays.

// var a = [1,2,3,4,5]
// var b = [3,4,5,8,9]

// var c = 3,4,5
// var d = 0;

// for(var i=0; i>a.length; i++){
//     if(a[i], b[i] === 3){
//         console.log(a[i]);
//     }
// }





// Write a function that takes an array of integers and returns the sum of all the elements in the array.

// let array = [1,2,3,4,5,6]
// sum = 0;
// for(let i=0; i < array.length; i++){
//      sum += array[i];
// }
// console.log(sum);



//  print an array in reverse order
// let array = [1,2,3,4,5,6,7,8,9];
// for(let i = array.length-1; i >= 0; i--){
//      console.log(array[i]);
// }


// print a number in reverse order

// let a = 123456;
// let string = a.toString();
// let reverserstring = '';
// for(let i=string.length -1; i>=0; i--){
//     reverserstring += string[i];
// }
// console.log(parseInt(reverserstring))


// print a string in reverse order

// let a = "hello avinash"
// let string = a.split("");
// let reversedString = string.reverse().join('');
// console.log(reversedString);


// find a odd non-prime number in 1 to 100 number

for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
        let isprime = false;
        for(j = 3 ; j < Math.sqrt(i); j+=2){
            if(i % j === 0){
                isprime = true;
                break;
            }
        }
        if(!isprime){
            console.log(i);
        }
    }
}

// find a even number in 1 to 100 number

// for(let i=1; i < 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


// find a maximum number

// let a = [1, 2, 3, 4, 8, 10, 5, 3]
// let maxnumber = a[0];
// for (let i = 0; i < a.length; i++){
//     if(a[i] > maxnumber){
//         maxnumber = a[i]
//     }
// }console.log(maxnumber);



// find a minimum number

// let a = [1, 2, 3, 4, 8, 10, 5, 3]
// minnumber = a[0];
// for (let i = 0; i < a.length; i++){
//     if(a[i] < minnumber){
//         minnumber = a[i];
//     }
// }console.log(minnumber);



// find average of number

// let a = [1, 2, 3, 4, 8, 10, 5, 3]
// sum = 0;
// for (let i = 0; i < a.length; i++){
//     sum += a[i];
// }
// let average = sum / a.length;
// console.log(average);






