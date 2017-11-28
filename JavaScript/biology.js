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
    biohome.style.backgroundColor = "#6f6f70";
    biohomeCurrent = true;
}

//reset background colors of list items
function resetColors(){
    bluegill.style.backgroundColor = "#088c0f";
    biohome.style.backgroundColor = "#088c0f";
    waterquality.style.backgroundColor = "#088c0f";
    
    biohomeCurrent = false;
    bluegillcurrent = false;
    waterqualityCurrent = false;
}

//biology homepage button
biohome.addEventListener("click", function(){
    document.getElementById('content').src='../HTML/biologistHome.html';
    resetColors();
    biohome.style.backgroundColor = "#6f6f70";
    biohomeCurrent = true;
    
    
    
});

biohome.onmouseout = function(){
    if(biohomeCurrent !== true){
        biohome.style.backgroundColor = "#088c0f";
    }
   
};


//bluegill page button
bluegill.addEventListener("click", function(){
    document.getElementById('content').src='../HTML/blueGillResearch.html';
    resetColors();
    bluegill.style.backgroundColor = "#6f6f70";
    bluegillcurrent = true;
    
    
});

bluegill.onmouseout = function(){
    if(bluegillcurrent !== true){
        bluegill.style.backgroundColor = "#088c0f";
    }

};

//Water quality page button
waterquality.addEventListener("click", function(){
    document.getElementById('content').src='../HTML/waterQualityResearch.html';
    resetColors();
    waterquality.style.backgroundColor = "#6f6f70";
    waterqualityCurrent = true;
    
    
});

waterquality.onmouseout = function(){
    if(waterqualityCurrent !== true){
        waterquality.style.backgroundColor = "#088c0f";
    }

};


