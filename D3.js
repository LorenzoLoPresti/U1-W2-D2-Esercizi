/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log('--------Esercizio 1--------');

const esercizio1Numero1 = 25
const esercizio1Numero2 = 13

if (esercizio1Numero1 > esercizio1Numero2) {
  console.log(esercizio1Numero1, 'è più grande di', esercizio1Numero2);
} else {
  console.log(esercizio1Numero2, 'è più grande di', esercizio1Numero1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log('--------Esercizio 2--------');

const esercizio2Numero = 3

if (esercizio2Numero !== 5) {
  console.log('not equal');
} else {
  console.log('equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log('--------Esercizio 3--------');

const esercizio3Numero = 5

if (esercizio3Numero % 5 === 0) {
  console.log('divisibile per 5');
} else {
  console.log('non divisibile per 5');
}
 
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log('--------Esercizio 4--------');

const esercizio4Numero1 = 8
const esercizio4Numero2 = 2

if (esercizio4Numero1 + esercizio4Numero2 === 8 || esercizio4Numero1 - esercizio4Numero2 === 8) {
  console.log('la somma o sottrazione dei due numeri è uguale a 8');
} else if (esercizio4Numero1 === 8 && esercizio4Numero2 === 8) {
  console.log('entrambi i numeri sono uguali a 8');
} else if (esercizio4Numero1 === 8 || esercizio4Numero2 === 8) {
  console.log('uno dei due numeri è uguale a 8');
} else {
  console.log('nessuno dei numeri è 8 e la loro somma/sottrazione non è pari a 8');
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log('--------Esercizio 5--------');

let totalShoppingCart = 20

if (totalShoppingCart > 50) {
  console.log('complimenti, hai diritto alla spedizione gratuita, il tuo totale è:', totalShoppingCart, 'euro');
} else {
  totalShoppingCart = totalShoppingCart + 10
  console.log('la spedizione costa 10 euro. Il tuo totale è:', totalShoppingCart, 'euro');
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log('--------Esercizio 6--------');

let bfShoppingCart = 70

bfShoppingCart = bfShoppingCart - (bfShoppingCart / 5)

if (bfShoppingCart > 50) {
  console.log('complimenti, hai diritto alla spedizione gratuita, il tuo totale è:', bfShoppingCart, 'euro');
} else {
  bfShoppingCart = bfShoppingCart + 10
  console.log('la spedizione costa 10 euro. Il tuo totale è:', bfShoppingCart, 'euro');
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log('--------Esercizio 7--------');

const esercizio7Numero1 = 2
const esercizio7Numero2 = 5
const esercizio7Numero3 = 1

let maxNumber = midNumber = minNumber = esercizio7Numero1

if (esercizio7Numero1 > esercizio7Numero2){
  midNumber = minNumber = esercizio7Numero2
} else {
  maxNumber = esercizio7Numero2
}

if (maxNumber > esercizio7Numero3) {
  if (esercizio7Numero2 > esercizio7Numero3) {
    minNumber = esercizio7Numero3
  } else {
    minNumber = esercizio7Numero2
  }
} else {
  midNumber = maxNumber
  maxNumber = esercizio7Numero3
}

console.log(maxNumber, midNumber, minNumber);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log('--------Esercizio 8--------');

const esercizio8 = 3

if (typeof esercizio8 === 'number') {
  console.log('è un numero');
} else {
  console.log('non è un numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log('--------Esercizio 9--------');

const esercizio9Numero = 2

if (esercizio9Numero === 0) {
  console.log('il numero è zero');
} else if (esercizio9Numero % 2 === 0) {
  console.log('il numero è pari');
}
 else {
  console.log('il numero è dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log('--------Esercizio 10--------');

let val = 3
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log('--------Esercizio 11--------');

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log('--------Esercizio 12--------');

delete me.lastName
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log('--------Esercizio 13--------');

delete me.skills[2]
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log('--------Esercizio 14--------');

const esercizio14Array = []

esercizio14Array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(esercizio14Array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log('--------Esercizio 15--------');

esercizio14Array[9] = 100
console.log(esercizio14Array);
