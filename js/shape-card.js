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

