const km = parseFloat( prompt('inserire chilometri da percorrere'));
const age = parseFloat( prompt('Inserire età passeggero'));
let trainTicket = km * 0.21;    



if (age < 18) {
    trainTicket = trainTicket - trainTicket * 0.2;
} else if (age > 65) {
    trainTicket = trainTicket - trainTicket * 0.4;
}

document.getElementById("trip_cost").innerHTML = "Il prezzo del tuo biglietto è: " + trainTicket + "€";







// console.log(km, age)
console.log(trainTicket)