function changeColor() {
    let heading = document.getElementById("heading"); 
    heading.style.color = "blue"; 
}

// Funksjoner:
function setHeading() {
    let fname = prompt("Skriv inn navnet ditt"); 
    console.log(fname);
    let firstname = document.getElementById("firstname"); 
    let heading = document.getElementById("heading"); 
    heading.innerText = "Velkommen, " + firstname.value; 
    heading.style.color = "red"; 
}

// Ein funksjon som sjekker kva ein har svart på spørsmål
function checkAnswer() {
    let q1a = document.getElementById("q1a"); 
    let q1b = document.getElementById("q1b"); 
    console.log("Q1a: " + q1a.checked); // Finner ut om radiobutton med id q1a er valt 
    console.log("Q1b: " + q1b.checked); // Finner ut om radiobutton med id q1b er valt 
}