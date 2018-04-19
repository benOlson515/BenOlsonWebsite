//*****script for icon***** 
var image = document.getElementById("resIconImg");
var imageDiv = document.getElementById("resIcon");

//make opacity 1 when hovering
image.addEventListener("mouseover", function() {
    image.style.opacity = 1;
})

image.onmouseout = function() {
    image.style.opacity = .4;
}

//*****script for modal*****
var close = document.getElementById("closeRes");
var resumeModal = document.getElementById("resumeModal");

//display modal when image is clicked
image.addEventListener("click", function(){
    modal.style.display = "block";
    
})

close.onclick = function(){
    modal.style.display = "none";
    
}

close.addEventListener("mouseover", function(){
    close.style.backgroundColor = "rgba(221,43,22,1)";
})

close.addEventListener("mouseout", function(){
    close.style.backgroundColor = "rgba(240,143,122,.5)";
})

//contact button hover
var btnContact = document.getElementById('contactButton');

btnContact.onmouseover = function() {
    btnContact.style.color = "white";
}
btnContact.onmouseout = function() {
    btnContact.style.color = "black";
}