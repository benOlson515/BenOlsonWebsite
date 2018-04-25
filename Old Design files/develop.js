var biohome = document.getElementById('bioHome');
var bluegill = document.getElementById('blueGill');
var waterquality = document.getElementById('waterQuality');

var biohomeCurrent = false;
var bluegillcurrent = false;
var waterqualityCurrent = false;

biohome.style.cursor = "pointer";
bluegill.style.cursor = "pointer";
waterquality.style.cursor = "pointer";

document.getElementById('body').onload = function(){
    document.getElementById('content').src='../HTML/biologistHome.html';
    resetColors();
    biohome.style.backgroundColor = "gray";
    biohomeCurrent = true;
}

//reset background colors of list items
function resetColors(){
    bluegill.style.backgroundColor = "rgba(70,70,70,1)";
    biohome.style.backgroundColor = "rgba(70,70,70,1)";
    waterquality.style.backgroundColor = "rgba(70,70,70,1)";
    
    biohomeCurrent = false;
    bluegillcurrent = false;
    waterqualityCurrent = false;
}

//biology homepage button
biohome.addEventListener("click", function(){
    document.getElementById('content').src='../HTML/biologistHome.html';
    resetColors();
    biohome.style.backgroundColor = "gray";
    biohomeCurrent = true;
    
    
    
});

biohome.onmouseout = function(){
    if(biohomeCurrent !== true){
        biohome.style.backgroundColor = "rgba(70,70,70,1)";
    }
   
};


//bluegill page button
bluegill.addEventListener("click", function(){
    document.getElementById('content').src='../HTML/blueGillResearch.html';
    resetColors();
    bluegill.style.backgroundColor = "gray";
    bluegillcurrent = true;
    
    
});

bluegill.onmouseout = function(){
    if(bluegillcurrent !== true){
        bluegill.style.backgroundColor = "rgba(70,70,70,1)";
    }

};

//Water quality page button
waterquality.addEventListener("click", function(){
    document.getElementById('content').src='../HTML/waterQualityResearch.html';
    resetColors();
    waterquality.style.backgroundColor = "gray";
    waterqualityCurrent = true;
    
    
});

waterquality.onmouseout = function(){
    if(waterqualityCurrent !== true){
        waterquality.style.backgroundColor = "rgba(70,70,70,1)";
    }

};
