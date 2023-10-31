/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (is else is else) console
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num1 = 10;
var num2 = 5;

if(num1 > num2) {
    console.log("num1 è maggiore di num2");
} 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 10
if( x !==5) {
  console.log("not euqal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // divisibile -> resto %
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 30

if( x / 5)  {
  console.log("divisbile per 5");
  
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
//if (serie di condizioni if -> la verifica ===)

var num1 = 16
var num1 = 8
if (num1 === 8 || num2 === 8) {
  console.log("Almeno uno dei due numeri è uguale a 8.");
} else if (num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log("La somma o la differenza dei numeri è uguale a 8.");
} else {
  console.log("Nessuna delle condizioni è soddisfatta.");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
// dichiaroo 3 variabili: totale, costo, pagamento=totale -> if -> se un valore è inferiore una soglia

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 60
var ShippingCost = 10
var totale = totalShoppingCart

if(totalShoppingCart > 50){
  
  console.log("Totale da pagare " + totale + "€")
  
} else {
  
  console.log("Totale da pagare (con costi di spedizioni: " + totale + "€")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
//simile a quello sopra (sconto * 0.8)

var totalShoppingCart = 60;
var ShippingCost = 10;

var sconto = totalShoppingCart * 0.8;

if(sconto > 50){
  
  var totale = sconto;
  console.log("Totale da pagare " + totale + "€")
  
} else {
  
  console.log("Totale da pagare (con costi di spedizioni: " + totale + "€")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
// annido una serie di if -> controllo tutte le varie condizioni e con al console stampo la condizione quando è true

/* SCRIVI QUI LA TUA RISPOSTA */

var a = 10
var b = 5
var c = 15


var alto;
var medio;
var basso;

if (a >= b && a >= c) {
    alto = a;
    if (b >= c) {
       medio = b;
      basso = c;
   } else {
       medio = c;
       basso = b;
  }
} else if (b >= a && b >= c) {
  alto = b;
  if (a >= c) {
      medio = a;
      basso = c;
  } else {
      medio = c;
      basso = a;
  }
} else {
  alto = c;
  if (a >= b) {
      medio = a;
      basso = b;
  } else {
      medio = b;
      basso = a;
  }
}
console.log("Valore più alto " + alto)
console.log("Valore intermedio " + medio)
console.log("Valore più basso " + basso)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  
*/
// typeof ->  if else

/* SCRIVI QUI LA TUA RISPOSTA */
var num = 50;

if(typeof num === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero")
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
// modulo di 2 (%) -> if else

/* SCRIVI QUI LA TUA RISPOSTA */

if (x%2 == 0) {
  console.log("è pari");
} else if (x%2 == 1) {
  console.log("è dispari");
} 

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
// ricordatevi che siamo dentro ad un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto (incrementale)

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me["city"] = 'Toronto';

console.log(me) */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
// poso cancellare da un oggetto

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me["city"] = 'Toronto';


delete me.lastName;

me.skills.pop();

console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
// metodi array -> rimuovere l'ultimo elemento

me.skills.pop();


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
//metodo array -> inserire  qualcosa nell'arry

var num = [1,2,3,4,5,6,7,8,9,10];
console.log(num);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
// selezionare il nono elemento e assegnare un nuovo valore

/* SCRIVI QUI LA TUA RISPOSTA */


