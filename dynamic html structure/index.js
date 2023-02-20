

function dynamic(){
    var mainDiv = document.getElementById("cs");
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.innerText = "this is my first paragraph using js";
    div.append(h1);
    mainDiv.append(div);
}
