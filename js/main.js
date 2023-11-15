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

// gestione griglia
function handleGrid(mainContainer, typeOfHtmlTag, classAddContent){
    let i = 1;
    for(let i = 1; i <= 100; i++){

        const content = document.createElement(typeOfHtmlTag);
        content.classList.add(classAddContent);
        content.innerHTML +=`<div>${i}</div>`;
        mainContainer.append(content);
    }
  
}

const container = document.querySelector('.main-container');
const content = 'div';
const boxClass = 'box';

handleGrid(container,content,boxClass);