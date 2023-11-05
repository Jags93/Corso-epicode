/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for( let i = 0; i<pets.length; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets". sort
*/
console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/* ho tenuto in conto il risultato del esercizio 3, di conseguenza il primo elemtno dell'array era
    'redfish' e l'ho spostato infonfo */
pets.shift()
pets.push('redfish')
console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = "DP453GH"
cars[1].licensePlate= "ET968LK"
cars[2].licensePlate= "EA0989MN"
  



  console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newcar = {
   brand: "Alfa Romeo",
   model: "Giulia",
   licensePlate: "FK811KH",
   color: "metallic grey",
   trims: ['business', 'spoiler', 'tinted windows'],
   

}
cars.push(newcar);

for(let i=0; i<cars.length; i++){
  cars[i].trims.pop();
}

console.log(cars);





/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []


for( let i=0; i<cars.length; i++){
   const finiture = cars[i]
   justTrims.push(finiture.trims[0])
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i=0; i<cars.length; i++) {
  const car = cars[i]
  const primalettera = car.color.charAt(0);
  if(primalettera === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
while (i < numericArray.length){

    const value = numericArray[i];

    if(value === 32) {
      console.log(value);
      break;
    }
    console.log(value);
    i++;




}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
//const charactersArray = ['g', 'n', 'u', 'z', 'd']


function posizioniAlfabeto(arrayCaratteri) {
  const alfabeto = "abcdefghilmnopqrstuvz";
  const posizioni = [];

  for (let carattere of arrayCaratteri) {
    switch (carattere) {
      case 'a':
        posizioni.push(alfabeto.indexOf('a') + 1);
        break;
      case 'b':
        posizioni.push(alfabeto.indexOf('b') + 1);
        break;
      case 'c':
        posizioni.push(alfabeto.indexOf('c') + 1);
        break;
      case 'd':
        posizioni.push(alfabeto.indexOf('d') + 1);
        break;
      case 'e':
        posizioni.push(alfabeto.indexOf('e') + 1);
        break;
      case 'f':
        posizioni.push(alfabeto.indexOf('f') + 1);
        break;
      case 'g':
        posizioni.push(alfabeto.indexOf('g') + 1);
        break;
      case 'h':
        posizioni.push(alfabeto.indexOf('h') + 1);
          break;
      case 'i':
        posizioni.push(alfabeto.indexOf('i') + 1);
        break;
      case 'l':
        posizioni.push(alfabeto.indexOf('l') + 1);
        break;
      case 'm':
        posizioni.push(alfabeto.indexOf('m') + 1);
        break;
      case 'n':
        posizioni.push(alfabeto.indexOf('n') + 1);
        break;
      case 'o':
        posizioni.push(alfabeto.indexOf('o') + 1);
        break;
      case 'p':
        posizioni.push(alfabeto.indexOf('p') + 1);
        break;
      case 'q':
        posizioni.push(alfabeto.indexOf('q') + 1);
        break;
      case 'r':
        posizioni.push(alfabeto.indexOf('r') + 1);
        break;
      case 's':
        posizioni.push(alfabeto.indexOf('s') + 1);
        break;
      case 't':
        posizioni.push(alfabeto.indexOf('t') + 1);
        break;
      case 'u':
          posizioni.push(alfabeto.indexOf('u') + 1);
          break;
      case 'v':
        posizioni.push(alfabeto.indexOf('v') + 1);
        break;
      case 'z':
        posizioni.push(alfabeto.indexOf('z') + 1);
        break;
      default:
        posizioni.push(-1); 
    }
  }

  return posizioni;
}

const arrayCaratteri = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];
const posizioni = posizioniAlfabeto(arrayCaratteri);
console.log(posizioni); 