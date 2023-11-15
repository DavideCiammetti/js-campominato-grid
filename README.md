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
