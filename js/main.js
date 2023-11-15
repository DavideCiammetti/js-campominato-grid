'use strict';

// <div class="main-container">
    // <div class="box">1</div>
    // <div class="box">1</div>
    // <div class="box">1</div>
    // <div class="box">1</div>
    // <div class="box">1</div>
// </div> 

/*funzioni */

// gestione griglia
function handleGrid(mainContainer, typeOfHtmlTag, classAddContent){
    for(let i = 1; i <= 100; i++){

        const content = document.createElement(typeOfHtmlTag);
        content.classList.add(classAddContent);
        content.innerHTML +=`<div>${i}</div>`;
        mainContainer.append(content);
    }
  
}
// gestione click per ogni casella
function handleClick(box, index,classAdd) {
    box.addEventListener('click', function () {

        box.classList.add(classAdd);
        console.log(`il numero cliccato è: ${index + 1}`);
    });
}
/*funzioni */
alert('per iniziare a giocare premi il pulsante play');

// gestione click apertura campo da gioco
const button = document.querySelector('.button');
let increm = 0;
const container = document.querySelector('.main-container');
const content = 'div';
const boxClass = 'box';

// evento click button
let click= false;
button.addEventListener('click', function(){

    if (!click) {
        handleGrid(container, content, boxClass);
        click = true;
    }
    // click per box
    const box = document.querySelectorAll('.box');
    const classAdd = 'click-col';

    for (let i = 0; i < box.length; i++) {
        handleClick(box[i], i, classAdd);
    }
    
});