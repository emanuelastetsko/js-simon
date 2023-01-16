/*
 *    
    SIMON SAYS:

    STEP:
    1. Definire funzione che generi 5 numeri casuali che andranno visualizzati in pagina
    2. Dal momento della stampa impostare un timer di 30 secondi
    3. Dopo 30 secondi nascondere all'utente i numeri e chiedere tramite 5 prompt diversi i 5 numeri
    4. Stampare su pagina sia i numeri iniziali che quelli inseriti dall'utente con un conteggio dei numeri azzeccati
 * 
 */


// Ciclo che genera 5 numeri casuali 
let i = 0;
while (i < 5) {
    
    let randomNumber = Math.floor(Math.random() * (10 - 1) ) + 1;
    console.log("randomNumber", randomNumber);
    const numberElement = randomNumber;
    console.log("numberElement", numberElement);
    i++;

}



// Impostare un timer 

const myTimeout = setTimeout(questionUser, 30000);

function questionUser() {

    alert("Ora ti verrà chiesto di inserire tutti i 5 numeri che hai visto. Mi raccomando inserisci solo un numero per volta!");

    i = 1;
    while (i < 6) {

        prompt("Quale numero hai visto?")
        i++;

    }
    
}