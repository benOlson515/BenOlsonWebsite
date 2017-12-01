//scripts to display modal with contact information
var openMdl = document.getElementById('contactButton');
var closeMdl = document.getElementById('close');
var contactMdl = document.getElementById('contactMdl');




//open it on button click
openMdl.addEventListener("click", function() {
    contactMdl.style.display = "block";
})

//close if cross is clicked
closeMdl.onclick = function() {
    contactMdl.style.display = "none";
}

/*document.onclick = function(event) {
    alert(event.target.getAttribute('id'));
}
*/