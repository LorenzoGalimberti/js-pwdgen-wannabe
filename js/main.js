/*
TESTO ESERCIZIO 

1)Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
2)Infine scrivi sulla console nomecognomecolorepreferito21
BONUS:
a)Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
b)Mostrare la password generata sulla vostra pagina HTML sbizzarrendosi con il layout e volendo potete usare Bootstrap
c)Fare un layout responsive



CONSIGLIO: Osservate il comportamento di let e var come si comporta sul codice. Mi raccomando alla fine USATE SEMPRE LET! */



let nome=prompt("inserisci il tuo nome :");
let cognome=prompt("Inserisci il tuo cognome :");
let colorePreferito=prompt("inserisci il tuo colore preferito");
let passwordSimple=nome+cognome+colorePreferito+21;
console.log(`
La password semplice sara'
${passwordSimple}`
);


// sezione bonus


let numeroUno = parseInt(prompt("inserisci un numero : "));
let numeroDue = parseInt(prompt("inserisci un altro numero : "));

let min, max;

if (numeroUno <= numeroDue) {
    min=numeroUno;
    max=numeroDue;
  } else {
    max=numeroUno;
    min=numeroDue;
  }

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un numero casuale compreso tra min e max inclusi


let passwordComplicated=nome+cognome+colorePreferito+randomNumber;

console.log(`
La password complessa sara'
${passwordComplicated}`
);