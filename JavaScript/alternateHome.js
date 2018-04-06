//vars for li elements
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var resume = document.getElementById('resume');


//change backgrounds of li elements on hover

about.onmouseover = function(){
    about.style.background = "rgba(70,70,70,1)";
}
about.onmouseout = function(){
    about.style.background = "rgba(0,0,0,0)";
}

contact.onmouseover = function(){
    contact.style.background = "rgba(70,70,70,1)";
}
contact.onmouseout = function(){
    contact.style.background = "rgba(0,0,0,0)";
}

resume.onmouseover = function(){
    resume.style.background = "rgba(70,70,70,1)";
}
resume.onmouseout = function(){
    resume.style.background = "rgba(0,0,0,0)";
}




//open contact modal
contact.addEventListener("click", function() {
    contactMdl.style.display = "block";
    /*window.alert("bio clicked");*/
})

//open resume modal
resume.addEventListener("click", function() {
    resumeModal.style.display = "block";
})



//script to close contact modal
var closeMdl = document.getElementById('close');
closeMdl.onclick = function() {
    contactMdl.style.display = "none";
}

closeMdl.onmouseover = function () {
    closeMdl.style.backgroundColor = "firebrick";
}

closeMdl.onmouseout = function () {
    closeMdl.style.backgroundColor = "";
}


// **script for about me modal
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


