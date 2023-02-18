// link  Blog -----------------
document.getElementById('btn-blog').addEventListener('click',function(){

    window.location.href='blog.html';
})



// traingle area---------------------------
document.getElementById('triangle-area').addEventListener('click',function(){
    const traingleBase =getElementValueById('base');
   
    if(isNaN(traingleBase)){
        alert('please provide a valid number');
        return;
    }else if(traingleBase<0){
        alert('please provide a positive number');
        return;
    }else if(traingleBase == ''){
        alert('please enter a value');
        return;
    }
    const traingleHeight = getElementValueById('height');
    
    if(isNaN(traingleHeight)){
        alert('please provide a valid number');
    }else if(traingleHeight<0){
        alert('please provide a positive number');
        return;
    }else if(traingleHeight == ''){
        alert('please enter a value');
        return;}
    const traingleAreaValue = 0.5*traingleBase*traingleHeight;
    const traingleAreaValueString = traingleAreaValue.toFixed(2);
    const traingleArea = traingleAreaValueString;

    

    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${1}.</td>
    <td style="mr-2px:">traingle</td> 
    <td style="margin-right:2px">${traingleArea} cm<sup>2</sup></td> 
    <td><button style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></button></td>
    `
      tableContainer.appendChild(tr);
})

// rectangle area--------------------------------------------
document.getElementById('rectangle-area').addEventListener('click',function(){
    const rectangleWidth =getElementValueById('width');
    if(isNaN(rectangleWidth)){
        alert('please provide a valid number');
    }else if(rectangleWidth<0){
        alert('please provide a positive number');
        return;
    }else if(rectangleWidth== ''){
        alert('please enter a value');
        return;}
    const rectangleHeight = getElementValueById('rectangle-height');
    if(isNaN(rectangleHeight)){
        alert('please provide a valid number');
    }else if(rectangleHeight<0){
        alert('please provide a positive number');
        return;
    }else if(rectangleHeight == ''){
        alert('please enter a value');
        return;}
    const rectangleAreaValue =rectangleWidth*rectangleHeight;
    const rectangleAreaValueString = rectangleAreaValue.toFixed(2);
    rectangleArea = rectangleAreaValueString;
    

 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${2}.</td>
    <td style="mr-2px:">rectangle</td> 
    <td style="margin-right:2px">${rectangleArea} cm<sup>2</sup></td> 
    <td><button style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></button></td>
    `
      tableContainer.appendChild(tr);
})

// Parellelogram area-------------------------------

document.getElementById('parallelogram-area').addEventListener('click',function(){
    const parallelogramWidth =getElementValueById('parallelogram-base');
    const parallelogramHeight = getElementValueById('parallelogram-height');
    const parallelogramalculateValue =parallelogramWidth*parallelogramHeight;
    const parallelogramAreaValueString = parallelogramalculateValue.toFixed(2);
    const parallelogramArea = parallelogramAreaValueString;

 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${3}.</td>
    <td style="mr-2px:">parallelogram</td> 
    <td style="margin-right:2px">${parallelogramArea} cm<sup>2</sup></td> 
    <td><button style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></button></td>
    `
      tableContainer.appendChild(tr);
})
// rhombos area-------------------------------

document.getElementById('rhombus-area').addEventListener('click',function(){
    const rhombusArm1 =getElementValueById('rhombus-d1');
    const rhombusArm2 = getElementValueById('rhombus-d2');
    const rhombosCalculateValue =0.5*rhombusArm1*rhombusArm2;
   
    const rhombosAreaValueString = rhombosCalculateValue.toFixed(2);
    const rhombosArea = rhombosAreaValueString;
   
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${4}.</td>
    <td style="mr-2px:">rhombus</td> 
    <td style="margin-right:2px">${rhombosArea} cm<sup>2</sup></td> 
    <td><button style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></button></td>
    `
      tableContainer.appendChild(tr);
})
// pentagon area-------------------------------

document.getElementById('pentagon-area').addEventListener('click',function(){
    const pentagonPerimeter =getElementValueById('pentagon-perameter');
    const pentagonBase = getElementValueById('pentagon-base');
    const pentagonCalculateValue =0.5*pentagonPerimeter*pentagonBase;
    
    const pantagonAreaString = pentagonCalculateValue.toFixed(2);
    const pantagonArea = pantagonAreaString;
   
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${5}.</td>
    <td style="mr-2px:">pentagon</td> 
    <td style="margin-right:2px">${pantagonArea} cm<sup>2</sup></td> 
    <td><button style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></button></td>
    
    `
      tableContainer.appendChild(tr);
})
// ellipse area-------------------------------

document.getElementById('ellipse-area').addEventListener('click',function(){
    const ellipseValueA =getElementValueById('ellipse-value1');
    const ellipseValueB = getElementValueById('ellipse-value2');
    const ellipseCalculateValue =3.1416*ellipseValueA*ellipseValueB;
    const ellipseAreaString = ellipseCalculateValue.toFixed(2);
    const ellipseArea = ellipseAreaString;

  
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${6}.</td>
    <td style="mr-2px:">ellipse</td> 
    <td style="margin-right:2px">${ellipseArea} cm<sup>2</sup></td> 
    <td><button style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></button></td>
   
    `
      tableContainer.appendChild(tr);
})

// mouse hover effect-------------------------------------

document.getElementById('random-color-traingle').addEventListener('mouseover',function(){
    mouseOver('random-color-traingle');
})
document.getElementById('random-color-rectangle').addEventListener('mouseover',function(){
    mouseOver('random-color-rectangle');
})
document.getElementById('random-color-parallelogram').addEventListener('mouseover',function(){
    mouseOver('random-color-parallelogram');
})
document.getElementById('random-color-rhombos').addEventListener('mouseover',function(){
    mouseOver('random-color-rhombos');
})
document.getElementById('random-color-pentagon').addEventListener('mouseover',function(){
    mouseOver('random-color-pentagon');
})
document.getElementById('random-color-ellipse').addEventListener('mouseover',function(){
    mouseOver('random-color-ellipse');
})



