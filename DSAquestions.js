// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. // return index

// function array() {
//     array = [];
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

Input: nums = [2, 7, 11, 15], target = 9
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



nums = [0,1,2,3,4,5,6,7,8,9];
// target = 5
console.log(nums.splice(5,1));

// Array = [];

// for(var i =0; i< nums.length; i++){
//     if()
// }

