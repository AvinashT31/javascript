

function dynamic(){
    var mainDiv = document.getElementById("cs");
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.innerText = "this is my first paragraph using js";
    div.append(h1);
    mainDiv.append(div);
}


function popularstorage(){
    localStorage.setItem('Name','Avinash');
    localStorage.setItem('age', '24');
}

function display(){
   document.getElementById("demo").innerHTML=localStorage.getItem("Name");
}



// // function popularstorage(){
// //     localStorage.removeItem('age');
// // }

// function popularstorage(){
//     localStorage.clear();
// }
