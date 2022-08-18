var firstTitle = document.getElementById("title");
firstTitle.addEventListener("click", move);

var secondTitle = document.getElementById("title-1");
secondTitle.addEventListener("click", moveSecondTitle);

var thirdTitle = document.getElementById("title-2");
thirdTitle.addEventListener("click", moveThirdTitle);

function move(){
    document.getElementById('overlayed-side-slide-bar').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('title').style.marginLeft = "2vw";
    document.getElementById('title-1').style.marginLeft = "2vw";
    document.getElementById('title-2').style.marginLeft = "2vw";
    document.getElementById('overlayed-side-slide-bar').style.zIndex = "5";
    document.getElementById('title').style.zIndex = "5";
    document.getElementById('overlayed-side-slide-bar-1').style.zIndex = "4";
    document.getElementById('title-1').style.zIndex = "4";
    document.getElementById('overlayed-side-slide-bar-2').style.zIndex = "3";
    document.getElementById('title-2').style.zIndex = "3";
    
}

function moveSecondTitle(){
    document.getElementById('overlayed-side-slide-bar').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('title').style.marginLeft = "2vw";
    document.getElementById('title-1').style.marginLeft = "2vw";
    document.getElementById('title-2').style.marginLeft = "2vw";
    document.getElementById('overlayed-side-slide-bar-1').style.zIndex = "5";
    document.getElementById('title-1').style.zIndex = "5";
    document.getElementById('overlayed-side-slide-bar').style.zIndex = "4";
    document.getElementById('title').style.zIndex = "4";
    document.getElementById('overlayed-side-slide-bar-2').style.zIndex = "3";
    document.getElementById('title-2').style.zIndex = "3";
}

function moveThirdTitle(){
    document.getElementById('overlayed-side-slide-bar').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('title').style.marginLeft = "2vw";
    document.getElementById('title-1').style.marginLeft = "2vw";
    document.getElementById('title-2').style.marginLeft = "2vw";
    document.getElementById('overlayed-side-slide-bar-2').style.zIndex = "5";
    document.getElementById('title-2').style.zIndex = "5";
    document.getElementById('overlayed-side-slide-bar').style.zIndex = "4";
    document.getElementById('title').style.zIndex = "4";
    document.getElementById('overlayed-side-slide-bar-1').style.zIndex = "3";
    document.getElementById('title-1').style.zIndex = "3";
}


