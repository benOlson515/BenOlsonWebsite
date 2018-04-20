//vars for li elements
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var resume = document.getElementById('resume');
var proj = document.getElementById('projects');



// *******script for resume modal***************
resume.addEventListener("click", function() {
    document.getElementById("resFrame").src="Docs/Resume2018.pdf#zoom=75";
    resumeModal.style.display = "block";
    
})

var closeResume = document.getElementById("closeRes");

closeResume.addEventListener("click", function() {
    resumeModal.style.display = "none";
    document.getElementById("resFrame").src="";
})

closeResume.addEventListener("mouseover", function(){
    closeResume.style.backgroundColor = "firebrick";
})

closeResume.addEventListener("mouseout", function(){
    closeResume.style.backgroundColor = "";
})




// *******script for contact modal**************

contact.addEventListener("click", function() {
    contactModal.style.display = "block";
})

var closeContact = document.getElementById('closeContact');

closeContact.onclick = function() {
    contactModal.style.display = "none";
    contact.style.background = "rgba(70,70,70,1)";
}

closeContact.addEventListener("mouseover", function(){
    closeContact.style.backgroundColor = "firebrick";
})

closeContact.addEventListener("mouseout", function(){
    closeContact.style.backgroundColor = "";
    
})



// ************script for about me modal**********

var aboutMdl = document.getElementById('aboutModal');
var closeAbout = document.getElementById('closeAbout');

about.addEventListener("click", function(){
    aboutMdl.style.display = "block";
})

closeAbout.addEventListener("click", function(){
    aboutMdl.style.display = "none";
})

closeAbout.onmouseover = function () {
    closeAbout.style.backgroundColor = "firebrick";
}

closeAbout.onmouseout = function () {
    closeAbout.style.backgroundColor = "";
}


