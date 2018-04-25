//script for resume modal
//*****script for icon***** 
var image = document.getElementById("resIconImg");
var imageDiv = document.getElementById("resIcon");

//make opacity 1 when hovering
image.addEventListener("mouseover", function () {
    image.style.opacity = 1;
});

image.onmouseout = function () {
    image.style.opacity = .4;
};

//*****script for modal*****
var resumeModal = document.getElementById("resumeModal");
var close = document.getElementById("closeRes");

//display modal when image is clicked
image.addEventListener("click", function () {
    resumeModal.style.display = "block";
})

close.onclick = function(){
    resumeModal.style.display = "none";
}

close.addEventListener("mouseover", function(){
    close.style.backgroundColor = "rgba(221,43,22,1)";
})

close.addEventListener("mouseout", function(){
    close.style.backgroundColor = "rgba(240,143,122,.5)";
})