var css = document.querySelector("h3");
var cl1 = document.querySelector(".cl1");
var cl2 = document.querySelector(".cl2");
var body = document.getElementById("body");

function setGradient(){
    body.style.background =
    "linear-gradient(to right, " 
    + cl1.value 
    +  ", " 
    + cl2.value
    + ")";
    css.textContent = "this the hex code of the first color " + cl1.value 
    + "  and this is the hex code of the second colour " + cl2.value ;
}

cl1.oninput = setGradient
cl2.oninput = setGradient

