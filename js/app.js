const km = parseFloat( prompt('inserire chilometri da percorrere'));
const age = parseFloat( prompt('Inserire età passeggero'));



if (age < 18) {
    let trainTicket = trainTicket * 0.2;
} else if (age > 65) {
    let trainTicket = trainTicket * 0.4;
} else {
    let trainTicket = km * 0.21;    
}

document.getElementById("trip_cost").innerHTML = "Il prezzo del tuo biglietto è: " + trainTicket + " &euro";







// console.log(km, age)
console.log(trainTicket)