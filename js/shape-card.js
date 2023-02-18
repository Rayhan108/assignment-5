// traingle area---------------------------
document.getElementById('triangle-area').addEventListener('click',function(){
    const traingleBase =getElementValueById('base');
    const traingleHeight = getElementValueById('height');
    const traingleArea = 0.5*traingleBase*traingleHeight;
    

    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${1}.</td>
    <td style="mr-2px:">traingle</td> 
    <td style="margin-right:2px">${traingleArea} cm<sup>2</sup></td> 
    <td style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></td>
    `
      tableContainer.appendChild(tr);
})

// rectangle area--------------------------------------------
document.getElementById('rectangle-area').addEventListener('click',function(){
    const rectangleWidth =getElementValueById('width');
    const rectangleHeight = getElementValueById('rectangle-height');
    const rectangleArea =rectangleWidth*rectangleHeight;
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${2}.</td>
    <td style="mr-2px:">rectangle</td> 
    <td style="margin-right:2px">${rectangleArea} cm<sup>2</sup></td> 
    <td style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></td>
    `
      tableContainer.appendChild(tr);
})

// Parellelogram area-------------------------------

document.getElementById('parallelogram-area').addEventListener('click',function(){
    const parallelogramWidth =getElementValueById('parallelogram-base');
    const parallelogramHeight = getElementValueById('parallelogram-height');
    const parallelogramArea =parallelogramWidth*parallelogramHeight;
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${3}.</td>
    <td style="mr-2px:">parallelogram</td> 
    <td style="margin-right:2px">${parallelogramArea} cm<sup>2</sup></td> 
    <td style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></td>
    `
      tableContainer.appendChild(tr);
})
// rhombos area-------------------------------

document.getElementById('rhombus-area').addEventListener('click',function(){
    const rhombusArm1 =getElementValueById('rhombus-d1');
    const rhombusArm2 = getElementValueById('rhombus-d2');
    const rhombusArea =0.5*rhombusArm1*rhombusArm2;
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${4}.</td>
    <td style="mr-2px:">rhombus</td> 
    <td style="margin-right:2px">${rhombusArea} cm<sup>2</sup></td> 
    <td style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></td>
    `
      tableContainer.appendChild(tr);
})
// pentagon area-------------------------------

document.getElementById('pentagon-area').addEventListener('click',function(){
    const pentagonPerimeter =getElementValueById('pentagon-perameter');
    const pentagonBase = getElementValueById('pentagon-base');
    const pentagonArea =0.5*pentagonPerimeter*pentagonBase;
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${5}.</td>
    <td style="mr-2px:">pentagon</td> 
    <td style="margin-right:2px">${pentagonArea} cm<sup>2</sup></td> 
    <td style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></td>
    `
      tableContainer.appendChild(tr);
})
// ellipse area-------------------------------

document.getElementById('ellipse-area').addEventListener('click',function(){
    const ellipseValueA =getElementValueById('ellipse-value1');
    const ellipseValueB = getElementValueById('ellipse-value2');
    const ellipseArea =3.1416*ellipseValueA*ellipseValueB;
 
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td style="padding=2px">${5}.</td>
    <td style="mr-2px:">ellipse</td> 
    <td style="margin-right:2px">${ellipseArea} cm<sup>2</sup></td> 
    <td style="background-color: #1090D8;padding:2px">convert to m<sup>2</sup></td>
    `
      tableContainer.appendChild(tr);
})