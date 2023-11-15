# Campo Minato


## Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# ragionamento

come si evince dal testo il **click** sul bottone sarà **l'evento** che aprirà il gioco 

### campo da gioco

- GRIGLIA QUADRATA 10x10 con numeri progressivi da 1 a 100 

## sviluppo codice 

per uqesta prima parte, dopo aver creato la parte html che **NON COMPRENDE** 
la griglia, abbiamo la parte del click al bottone che apre il gioco, quindi credo si debba iniziare creando la griglia all'interno di un evento che si scatena solo al click del bottone


### eventi sulle celle

quando si **clicca** su ogni cella in console appare il numero della cella e quest'ultima si colora di azzurro 

per questa seconda parte invece il click quindi l'evento su ogni singola cella andrà inserito nella creazione delle celle 


## ragionamento conclusivo 

### passo 1
inizierei creando una funzione che gestisce la griglia chiamata:
nome funzione = handleGrid();

per la creazione della griglia nell'HTML ho gia un contenitore **main-container** quindi dovrò soltanto creare le box che conterranno i numeri ed ogni box avrà la classe appunto **box** e per numerare ogni box aggiungero la variabile che utilizzo nel contatore a box 

### passo 2

dopo aver creato la funzione gestione griglia creerò l'azione che, al click sul pulzante **play** aprirà la griglia creata nella funzione quindi sarà:

function handleGrid(){}

azione click pulsante{
    handleGrid();
}

cosi al click richiamo la funzione e si apre la griglia 

### passo 3

al click di una cella qualsiasi la stessa si deve colorare di blue per questo usero il **return** della funzione per assegnarlo ad una variabile ed utilizzarlo successivamente 

const container = document.queryselection('.container');
const content = document.createElent('div');
content.classList('box','active');

for(let i = 0; i < 100; i++){
    <div>i</div>
}


# Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## commenti sul codice
   inizializzo le variabili per una che prende le varie classi box-uno-due-tre e l'altra aggiunge la classe click-col che al click fa cambiare colore
   const box = document.querySelectorAll('box-uno');
   const classAdd = 'click-col';
   creo un ciclo for che mi permette di ciclare tante volte quante il numero delle box e al suo interno grazie alla funzione aggiunge la classe click-col eincrementa index
   for (let i = 0; i < box.length; i++) 
       handleClick(box[i], i, classAdd);


## appunto sul codice del click 

button.addEventListener('click', function(){

    if(difficult.value === 'hard'){     //difficoltà hard
        const counter = 100;
        const classAddContent = 'box-uno';
        if(!click) {
            handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
            click = true;
        }
        // click per box
        const box = document.querySelectorAll('.box-uno');
        const classAdd = 'click-col';

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
        }
    }

    //difficoltà normal
    if(difficult.value === 'normal'){   
        const counter = 81;
        const classAddContent = 'box-due';
        if(!click) {
            handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
            click = true;
        }
        // click per box
        const box = document.querySelectorAll('.box-due');
        const classAdd = 'click-col';

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
        }
    }

    //difficoltà easy
     if(difficult.value === 'easy'){      
        const counter = 49;
        const classAddContent = 'box-tre';
        if(!click) {
            handleGrid(counter, mainContainer,  typeOfHtmlTag, classAddContent);
            click = true;
        }
        // click per box
        const box = document.querySelectorAll('.box-tre');
        const classAdd = 'click-col';

        for (let i = 0; i < box.length; i++) {
            handleClick(box[i], i, classAdd);
        }
    }
});

ho dovuto creare 3 condizioni if perche semplificando il codice in questo modo:

  if(difficult.value === 'hard'){             // difficolta hard
         counter = 100;
        classAddContent = 'box-uno';
    }else if(difficult.value === 'normal'){     // difficolta normal
       counter = 81;
         classAddContent = 'box-due';
    }else if(difficult.value === 'easy'){       // difficolta easy
         counter = 49;
         classAddContent = 'box-tre';
    }

    const box = document.querySelectorAll('box-uno');
    const classAdd = 'click-col';
   eincrementa index
    for (let i = 0; i < box.length; i++) {
        handleClick(box[i], i, classAdd);
    }

la parte finale che mi serve per cliccare ogni singola box non viene letta del programma per questo l'ho inserita all'interno di ogni singola f che inizialmente erano else if ma poi ho preferito cambiare in if per leggibilità