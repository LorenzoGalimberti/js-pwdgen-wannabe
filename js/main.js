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


