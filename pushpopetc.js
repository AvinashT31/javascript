//Pop (remove last element from array)

var UserValue = ["avinash", "kalpesh", "rehmat", "sneha", "rocky"];
UserValue.pop();
console.log(UserValue);


//shift (remove first element from array)

var UserValue = ["avinash", "kalpesh", "rehmat", "sneha", "rocky"];
UserValue.shift();
console.log(UserValue);


//push (added the element in first in array)

var UserValue = ["avinash", "kalpesh", "rehmat", "sneha", "rocky"];
UserValue.unshift("ankita");
console.log(UserValue);


//push (added the element in the last in array)

var UserValue = ["avinash", "kalpesh", "rehmat", "sneha", "rocky"];
UserValue.push("ankita");
console.log(UserValue);


//splice (removes array from array's splice (2,1) 2means 2nd position & 1 means 1st item (2nd position 1st item)

var UserValue = ["avinash", "kalpesh", "rehmat", "sneha", "rocky"];
UserValue.splice(2,1);
console.log(UserValue);