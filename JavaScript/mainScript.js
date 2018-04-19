var bio = document.getElementById('biology');
var adven = document.getElementById('adventure');
var dev = document.getElementById('developer');
var page = document.getElementById('fullPage');
var name = document.getElementById('wrap');
var btnContact = document.getElementById('contactButton');





//events for developer link
dev.onmouseover = function(){
    page.style.backgroundImage = "url('Images/deskGrayscale.jpg')";
    page.style.backgroundSize = "cover";
    dev.style.background = "rgba(70,70,70,1)";
};

dev.onmouseout = function(){
    resetBG();
};

//events for biologist link
bio.onmouseover = function(){
    page.style.backgroundImage = "url('Images/bgTable.jpg')";
    page.style.backgroundSize = "cover";
    bio.style.background = "rgba(70,70,70,1)";
    
};

bio.onmouseout = function(){
    resetBG();
};

//events for adventure link
adven.onmouseover = function(){
    page.style.backgroundImage = "url('Images/ellysPeakGS.jpg')";
    page.style.backgroundSize = "cover";
    adven.style.background = "rgba(70,70,70,1)";
};

adven.onmouseout = function(){
    resetBG();
};

//reset the background to the plain color on mouse out
function resetBG(){
    page.style.background = "rgba(0,0,0,.8)";
    dev.style.background = "rgba(0,0,0,0)";
    adven.style.background = "rgba(0,0,0,0)";
    bio.style.background = "rgba(0,0,0,0)";
};


//contact button hover
btnContact.onmouseover = function() {
    btnContact.style.color = "white";
}
btnContact.onmouseout = function() {
    btnContact.style.color = "black";
}


//close if clicked anywhere outside of modal
window.onclick = function(event) {
    
    if(event.target.getAttribute('class') !== 'mdlContent' && event.target.getAttribute('id') !== 'contactButton'){
        contactMdl.style.display = "none"; 
    }
    
    
}

//scripts to display modal with contact information

var openMdl = document.getElementById('contactButton');
var closeMdl = document.getElementById('close');
//var contactMdl = document.getElementById('conDim');

//open it on button click
openMdl.addEventListener("click", function() {
    contactMdl.style.display = "block";
})

//close if cross is clicked
closeMdl.onclick = function() {
    contactMdl.style.display = "none";
}

closeMdl.onmouseover = function () {
    closeMdl.style.backgroundColor = "firebrick";
}

closeMdl.onmouseout = function () {
    closeMdl.style.backgroundColor = "";
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