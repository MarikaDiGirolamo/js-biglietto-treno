let userAge = Number (prompt("Inserisci la tua età") );
let distance = Number (prompt ("Inserire la distanza chilometrica") );


console.log("userAge", userAge);
console.log("distance", distance);

let price = distance * 0.21;
let message = "";

console.log("base price", price);


if(isNaN (userAge) ) {
    alert ("L'età utente è errata. Non verranno applicate scontistiche");
}

if(userAge < 18){
    // console.log("L'utente è under 18");
    price *= 0.8;

    message = `Hai diritto allo sconto 'Young'. `;
    

} else if (userAge > 65) {
     // console.log("Utente over 65");

    price *= 0.55;

    message = `Hai diritto allo sconto 'Senior'. `;


} else {
    // console.log("L'utente non ha sconto");

    message = ``;
}

message = message + `Il prezzo del biglietto è ${price.toFixed(2)} €`;
// message *= `Il price del biglietto è ${price} €`;

document.getElementById("result").innerText = message;

console.log("final price", price);