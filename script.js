var x = document.getElementById("title");
x.addEventListener("click", move);
var y = document.getElementsByClassName("slide");
y.addEventListener("mouseout", moveOut);
setTimeout(move, 2000);


function move(){
    document.getElementById('overlayed-side-slide-bar').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('title').style.marginLeft = "2vw";
    document.getElementById('title-1').style.marginLeft = "2vw";
    document.getElementById('title-2').style.marginLeft = "2vw";
}

function moveOut(){
    document.getElementById('overlayed-side-slide-bar').style.marginLeft = "-35vw";
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-35vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-35vw";
    document.getElementById('title').style.marginLeft = "-32vw";
    document.getElementById('title-1').style.marginLeft = "-32vw";
    document.getElementById('title-2').style.marginLeft = "-32vw";
}