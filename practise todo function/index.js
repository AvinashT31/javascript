// function addTodo(){
//      alert('Working');
     
//      var myvar = document.getElementById("TodoHere").value
//      console.log(myvar, "myvar");

//      var myvarlocal = JSON.parse(localStorage.getItem("myvarlocal")) || [];
//       myvarlocal.push(myvar);
//       localStorage.setItem("myvarlocal", JSON.stringify(myvarlocal));
//      console.log(myvarlocal, "myvarlocal");
//     //  cs();
// }


// function cs(){

// var storage = JSON.parse(localStorage.getItem("myvarlocal"));
// console.log(storage, "storage");

//   var displayinfo = document.getElementById("displayTodos");
//   console.log(displayinfo, "displayinfo");

//   var student =[]

//   for(var i=0; i <storage.length; i++ ){

//  student += `<div><p>${storage[i]}</P></div>`

// }
// console.log(student);
// displayinfo.innerHTML = student;

// }
// cs()


// function addTodo(){
//     var todos = document.getElementById("TodoHere").value;
//     console.log(todos)
//     alert('Added');
// }
 
// function addTodo(){
//     var todos = document.getElementById("TodoHere").value

//     if(todos){
//         console.log(todos, "todos");
//         var myTodosFromLS = JSON.parse(localStorage.getItem("Todo")) || [];
//         myTodosFromLS.push(todos);
//         console.log(myTodosFromLS);
//         localStorage.setItem("Todo", JSON.stringify(myTodosFromLS));
//         document.getElementById("TodoHere").value = "";
//         cs();
//         alert('Added');        
//     }else{
//         alert('Add Todo First');
//     }
// }

// function cs(){
//       var divFromhtml = document.getElementById("displayTodos");

//       var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todo"));
//        console.log(gettingTodosFromLS,"gettingTodosFromLS");

//       var finalstructure = [`<div id="row">
//           <p>task</p> <p>completed</p>
//           </div>`]

//       for(var i=0; i < gettingTodosFromLS.length; i++){
//        finalstructure += `<div id="content">
//        <p>${gettingTodosFromLS[i]}</p>
//        <i onclick = "deleteTodo(${i})" class="fa-solid fa-trash"></i> 
//        </div>`
//     }
//     divFromhtml.innerHTML = finalstructure;
// }
// cs()


// function deleteTodo(todoIndex){
//     var todosFromLS = JSON.parse(localStorage.getItem("Todos"));
//     todosFromLS.splice(todoIndex, 1)
//     localStorage.setItem("Todos", JSON.stringify(todosFromLS));
//     cs(); 
// }


// function cs(){
     
//     var divFromhtml = document.getElementById("displayTodos")

//      var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todo"));
//      console.log(gettingTodosFromLS, "gettingTodosFromLS");
 
//      var finalstructure = [`<div id="row">
//      <p>task</p> <p>completed</p>
//      </div>`]

//      for(var i=0; i< gettingTodosFromLS.length; i++ ){
//         finalstructure += `<div id= "content">
//         <p>${gettingTodosFromLS[i]}</p>
//         <i onclick = "deleteTodo(${i})" class="fa-solid fa-trash"></i>
//         </div>`
//  }

//   divFromhtml.innerHTML = finalstructure;
// }
// cs()


// function cs(){
//     var mainDiv = document.getElementById("displayTodos");
//     var div = document.createElement("div");
//     var h1 = document.createElement("h1");
//     h1.innerText = "Hello World";
//     div.append(h1);
//     mainDiv.append(div);
// }
// cs()

// function addTodo(){
//     var gettingTodos = document.getElementById("TodoHere").value
//     console.log(gettingTodos, "gettingTodos")
//     alert('Added');
// }


// function studentRegistered(){
//     alert('Working');  

//     var mylocalvariable = document.getElementById("divFromHTML").value;

//     console.log(mylocalvariable, "mylocalvariable");
   

//     var mylocalstorage = JSON.parse(localStorage.getItem("mylocalstorage")) || []

//     mylocalstorage.push(mylocalvariable);

//     localStorage.setItem("mylocalstorage", JSON.stringify(mylocalstorage));

//     console.log(mylocalstorage,  "mylocalstorage");

//     // addinfo();

// }


// function addinfo(){

//     var display = JSON.parse(localStorage.getItem("mylocalstorage"));
//     console.log(display,"display");
    
//     var displaylist = document.getElementById("displayinfo");
//     console.log(displaylist, "displaylist");


//     var student = []

//     for(var i=0; i<display.length; i++ ){
//         student +=  `<div><p>${display[i]}</p></div>`
//     }
//     console.log(student, "student");
//     displaylist.innerHTML = student;

// }
// addinfo()
