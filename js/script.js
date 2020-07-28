//Un alert espone 5 numeri casuali.
//Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
//Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
//quali dei numeri da indovinare sono stati individuati.

// array n casuali pc
var nPc = [];
// creo 5 numeri random
for (var i = 0; i < 5; i++) {
    var nRandom = parseInt(Math.floor(Math.random() * 100));
    nPc.push(nRandom);
}
// visualizzo i numeri random del pc
alert(nPc);
console.log(nPc);
// creo array n utente
var nUtente = [];
// definisco il tempo dopo il quale appare il messaggio
setTimeout(insertNumbers, 1000);

// ******FUNCTION******
function insertNumbers() {
    for (var i = 0; i < 5; i++){
        var numero = parseInt(prompt('Inserisci uno alla volta i numeri che ricordi e premi invio'));
        if (nPc.includes(numero)){
            nUtente.push(numero);
        }
    }
    if (nUtente.length > 0){
        alert('Hai azzeccato i ' + nUtente.length + ' numeri seguenti: ' + ' ' + nUtente);
    } else{
        alert('Mannaggia! Non ne hai preso uno!');
    }
    console.log(nUtente);
};
