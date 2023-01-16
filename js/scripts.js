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



// Funzione per generare un numero casuale tra 1 e 9 
 
function randomNumberGenerator(max, min) {
   return Math.floor(Math.random() * (max - min) ) + min;
}



// Ciclo che genera 5 numeri casuali 
const div = document.querySelector("div.container");
const numbers = [];
for (let index = 0; index < 5; index++) {

    const randomNumber = randomNumberGenerator(1,9);
    console.log("randomNumber", randomNumber);
    numbers.push(randomNumber);

    const newElement = document.createElement('div');
    console.log('newElement', newElement, typeof newElement);
    newElement.innerHTML = `${randomNumber}`;
    div.append(newElement);
    
}

console.log("numbers", numbers);





// Impostare un timer affinchè i numeri scompaiano 
const firstTimeout = setTimeout(displayNone, 5000);

function displayNone() {

    document.querySelector("div").style.display = "none";

}




// Impostare un timer per i prompt
const secondTimeout = setTimeout (questionUser, 5100);
const guessedNumbers = [];
function questionUser() {

    alert("Ora ti verrà chiesto di inserire tutti i 5 numeri che hai visto. Mi raccomando inserisci solo un numero per volta!");

    for (let index = 0; index < 5; index++) {

        const userInput = prompt("Inserisci un numero");
        console.log(userInput);

        if (userInput == numbers[index]){
            guessedNumbers.push(numbers[index]);
        }
        
    }

    console.log("guessedNumbers", guessedNumbers);

    const numbersCounter = document.querySelector("div.results");
    numbersCounter.innerHTML = "Hai indovinato " + guessedNumbers.length + " numeri<br><br>";
    numbersCounter.innerHTML += guessedNumbers;

}