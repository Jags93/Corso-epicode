/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 /* SCRIVI QUI LA TUA RISPOSTA */

/*Ci sono 5 tipo di dataype primitivi e sono suddevisi in:
- numeri: si intende variabili scritti con numeri e possono essrere :
    interi
    decimali
    negativi

- stringhe: si intende variabili stringhe, scritte con caratteri che seguono alcune regole:
    devono essere scritte dentro gli apici doppi o singli
    devono avere lo stesso apice in aperture ed in chiusura
    per usare i caratteri speciali, bisogna utilizzare "\"
- booleani: sono molto seplici, hanno solo due variabili possibili:
  true
  false
- null: ha un solo valore che è null e non rientra nei precedenti tipi di dato
- undefined: ha solo come valore undifined, cioè un valore inesistene, nemmeno null

*/



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const name = "Jagsimran Jit";
console.log(name);



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = 12;
var numero2= 20;
console.log(numero1 + numero2);



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log(x)



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

name = "Singh" ;
console.log(name);



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var sottrazione= 4 - x;
console.log(4 - x);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1= "john";
var name2= "John";
console.log(name1 != name2)


var uguali = name1.toLocaleLowerCase() == name2.toLocaleLowerCase();
console.log(uguali)