function getElementValueById(elementId){
    const value = document.getElementById(elementId).value;
    shapeValue =Number(value);
    return shapeValue;
}
    
function getRandomColor(){
    var letter = "0123456789ABCDE";
    var color = "#";
    for(var i=0; i<6;i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
  
}


function mouseOver(element){
    const color = getRandomColor();
    const elementId = document.getElementById(element);
    elementId.style.background = color;
}

