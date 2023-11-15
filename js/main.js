'use strict';

// <div class="main-container">
    // <div class="box">1</div>
    // <div class="box">1</div>
    // <div class="box">1</div>
    // <div class="box">1</div>
    // <div class="box">1</div>
// </div> 

// const container = document.querySelector('mainContainer');

// for(let i = 1; i <= 100; i++){

//     const content = document.createElement('div');
//     content.classList.add('box');
//     content.innerHTML += `<div>${i}</div>`;
//     container.append(content);
// }

/*funzioni */

// gestione griglia
function handleGrid(mainContainer, typeOfHtmlTag, classAddContent){
    let j = 0;
    for(let i = 1; i <= 100; i++){

        const content = document.createElement(typeOfHtmlTag);
        content.classList.add(classAddContent);
        content.innerHTML +=`<div>${i}</div>`;
        mainContainer.append(content);
        j = i;
        console.log(j);
    }
    return j;
}
/*funzioni */


// gestione click apertura campo da gioco
const button = document.querySelector('.button');
// evento click button
let click= false;
button.addEventListener('click', function(){

    if (!click) {
        const container = document.querySelector('.main-container');
        const content = 'div';
        const boxClass = 'box';
        handleGrid(container, content, boxClass);
        click = true;
    }
});