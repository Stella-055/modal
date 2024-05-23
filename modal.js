let button =document.getElementById("baton");
let modaldisplay=document.querySelector("#modalfigure")
button.addEventListener("click" ,changes);
function changes(){
    modaldisplay.classList.add("modal");
    
}
modaldisplay.addEventListener("click",newchange);
function newchange(){
    modaldisplay.classList.remove("modal");
}