function getElementValueById(elementId){
    const value = document.getElementById(elementId).value;
    shapeValue =Number(value);
    return shapeValue;
}
    
// function validationById(elementId){
//     if(isNaN(elementId)){
//         alert('please provide a valid number');
//     }else if(elementId<0){
//         alert('please provide a positive number');
//         return;}
//     }