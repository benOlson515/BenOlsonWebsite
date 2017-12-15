//scripts to display modal with contact information
var openMdl = document.getElementById('contactButton');
var closeMdl = document.getElementById('close');
var contactMdl = document.getElementById('conDim');




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