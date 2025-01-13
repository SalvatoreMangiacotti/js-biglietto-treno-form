// Descrizione:

// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica:
// usando esclusivamente due input e un bottone(non stilizzati),realizziamo le specifiche scritte sopra.
// La risposta finale(o output) sarà anch’essa da scrivere in console.


// Selezioniamo gli elementi dell'html
let distanceToTravel = document.getElementById('distance-to-travel');
let userAge = document.getElementById('user-age');
let totalPrice;

// Assegnamo un valore casuale alle variabili distanceToTravel e userAge
distanceToTravel = 1000;
userAge = 30;

// Verifichiamo in console il funzionamento del codice
console.log(distanceToTravel, userAge);

// Calcolo del prezzo del biglietto
let ticketPrice = distanceToTravel * 0.21;


if (userAge < 18) {                               // Se l'utente ha meno di 18 anni 

    let discount = (ticketPrice * 20) / 100;     // verrà applicato uno sconto del 20% sul prezzo totale

    totalPrice = ticketPrice - discount;

} else if (userAge >= 65) {                      // Se l'utente ha un età maggiore o uguale a 65 anni

    let discount = (ticketPrice * 40) / 100;    // verrà applicato uno sconto del 40% sul prezzo totale

    totalPrice = ticketPrice - discount;

} else {                                       // Altrimenti 

    totalPrice = ticketPrice;                  // non verrà applicato nessuno sconto

}

totalPrice = totalPrice.toFixed(2);
console.log(`Il costo totale del biglietto sarà di: ${totalPrice} €`);