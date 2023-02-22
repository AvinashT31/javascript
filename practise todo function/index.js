// function addTodo(){
//     var todos = document.getElementById("TodoHere").value;
//     console.log(todos)
//     alert('Added');
// }
 
function addTodo(){
    var todos = document.getElementById("TodoHere").value

    if(todos){
        console.log(todos, "todos");
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todo")) || [];
        myTodosFromLS.push(todos);
        console.log(myTodosFromLS);
        localStorage.setItem("Todo", JSON.stringify(myTodosFromLS));
        document.getElementById("TodoHere").value = "";
        cs();
        alert('Added');        
    }else{
        alert('Add Todo First');
    }
}

function cs(){
      var divFromhtml = document.getElementById("displayTodos");

      var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todo"));
       console.log(gettingTodosFromLS,"gettingTodosFromLS");

      var finalstructure = [`<div id="row">
          <p>task</p> <p>completed</p>
          </div>`]

      for(var i=0; i < gettingTodosFromLS.length; i++){
       finalstructure += `<div id="content">
       <p>${gettingTodosFromLS[i]}</p>
       <i onclick = "deleteTodo(${i})" class="fa-solid fa-trash"></i> 
       </div>`
    }
    divFromhtml.innerHTML = finalstructure;
}
cs()


function deleteTodo(todoIndex){
    var todosFromLS = JSON.parse(localStorage.getItem("Todos"));
    todosFromLS.splice(todoIndex, 1)
    localStorage.setItem("Todos", JSON.stringify(todosFromLS));
    cs(); 
}


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

