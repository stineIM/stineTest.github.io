/*
let alder = 10; 

if (alder >= 18) {
    console.log("Person kan ta billappen.");
} 
else if (alder >= 16) {
    console.log("Moped");
}
else {
    console.log("Du må vente med å ta lappen.");
}

alder = 10; 

if (alder >= 18) {
    console.log("Bil"); 
}

if (alder >= 16) {
    console.log("Moped"); 
}

if (alder < 16) {
    console.log("Vent"); 
}

*/ 
/* 
// Eksempel 1 

let number = prompt("Skriv inn eit tal: "); 
if (number > 5) {
    console.log("Tallet er større enn 5."); 
}

// Eksempel 2 

let age = 12; 

if (age >= 18) {
    //console.log("Du er myndig"); 
}
else {
    //console.log("Du er ikkje myndig."); 
}

// Eksempel 3 

let score = 85; 

if (score >= 90) {
    console.log("Karakter: A"); 
} 
else if (score >= 80) {
    console.log("Karakter: B"); 
}
else if(score >= 70) {
    console.log("Karakter: C"); 
}
else if (score >= 60) {
    console.log("Karakter: D"); 
}
else if (score >= 50) {
    console.log("Karakter: E"); 
}
else {
    console.log("Karakter: F"); 
}



//Eksempel 4: 

let temperature = 4; 

if (temperature > 0) {
    if (temperature > 30) {
        console.log("Det er veldig varmt. "); 
    }
    else {
        console.log("Det er plussgrader."); 
    }
}
else {
    console.log("Det er kaldt"); 
}

// Eksempel 5 

let isRaining = false; 
let isCold = true; 

if ((isRaining == true) && (isCold == true)) {
    console.log("Det regner og det er kaldt"); 
}
else if (isRaining && !isCold) {
    console.log("Det regner, men det er ikkje kaldt"); 
}
else if (!isRaining && isCold) {
    console.log("Det regner ikkje, men det er kaldt."); 
}
else {
    console.log("Det regner ikkje og det er ikkje kaldt."); 
}
    */ 

function checkNumber() {
    let resultText = document.getElementById("resultText"); 
    let number = document.getElementById("inpNumber").value; 
   
    resultText.innerText = "";

    if (number < 100) {
        resultText.innerText = "Talet er lågare enn 100.";
    }
}