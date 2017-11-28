var bio = document.getElementById('biology');
var adven = document.getElementById('adventure');
var dev = document.getElementById('developer');
var page = document.getElementById('fullPage');
var name = document.getElementById('wrap');

//events for developer link
dev.onmouseover = function(){
    page.style.backgroundImage = "url('Images/deskGrayscale.jpg')";
    page.style.backgroundSize = "cover";
    dev.style.background = "rgba(70,70,70,1)";
}

dev.onmouseout = function(){
    resetBG();
}

//events for biologist link
bio.onmouseover = function(){
    page.style.backgroundImage = "url('Images/bgTable.jpg')";
    page.style.backgroundSize = "cover";
    bio.style.background = "rgba(70,70,70,1)";
    
}

bio.onmouseout = function(){
    resetBG();
}

//events for adventure link
adven.onmouseover = function(){
    page.style.backgroundImage = "url('Images/ellysPeakGS.jpg')";
    page.style.backgroundSize = "cover";
    adven.style.background = "rgba(70,70,70,1)";
}

adven.onmouseout = function(){
    resetBG();
}

//reset the background to the plain color on mouse out
function resetBG(){
    page.style.background = "rgba(0,0,0,.8)";
    dev.style.background = "rgba(0,0,0,0)";
    adven.style.background = "rgba(0,0,0,0)";
    bio.style.background = "rgba(0,0,0,0)";
}

/*var bio = document.getElementById('biology');
var adven = document.getElementById('adventure');
var dev = document.getElementById('developer');
var page = document.getElementById('fullPage');

//events for developer link
dev.onmouseover = function(){
    page.style.background = "url('../Images/deskGrayscale.jpg')";
    page.style.backgroundSize = "cover";
}

dev.onmouseout = function(){
    resetBG();
}

//events for biologist link
bio.onmouseover = function(){
    page.style.background = "url('../Images/labBG.jpg')";
    page.style.backgroundSize = "cover";
}

bio.onmouseout = function(){
    resetBG();
}

//events for adventure link
adven.onmouseover = function(){
    page.style.background = "url('../Images/ellysPeakGS.jpg')";
    page.style.backgroundSize = "cover";
}

adven.onmouseout = function(){
    resetBG();
}

//reset the background to the plain color on mouse out
function resetBG(){
    page.style.background = "rgba(220,223,229,1)";
};*/