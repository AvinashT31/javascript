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
        alert('Added');        
    }else{
        alert('Add Todo First');
    }
}





// function addTodo(){
//     var gettingTodos = document.getElementById("TodoHere").value
//     console.log(gettingTodos, "gettingTodos")
//     alert('Added');
// }

