// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate


const miatabella = document.getElementById('miatabella')
const listanumeri = document.getElementById('listanumeri')
miatabella.setAttribute("border", "1")
miatabella.setAttribute("width", "100%")

function creanumericasuali (){
    const numeri =[];
    for(i = 1; i<=90; i++){
        numeri.push(i);
    }

    for(let i = numeri.length - 1 ; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [numeri[i], numeri[j]]= [numeri[j], numeri[i]];

    }
    return numeri;
}

let numerirandom = creanumericasuali();
let index = 0;

function generaNumeri() {
    if (index < numerirandom.length) {
        const numeroCasuale = numerirandom[index];
        alert("Numero casuale: " + numeroCasuale);
        index++;
    } else {
        alert("Hai esaurito tutti i numeri casuali.");
    }
}
console.log(creanumericasuali)

function creatabella(){
    const numerirandom = creanumericasuali();
    let index =0;
    for(let r = 0; r<9; r++){
        const row = miatabella.insertRow();

        for(let c = 0; c < 10; c++ ){
            const cell = row.insertCell();
            cell.textContent = numerirandom[index];
            index++;
        }
    }
} 

function generanumeri(){
    const numeriEstratti = []
    const numeridisp = creanumericasuali();


    


} 


creatabella();

