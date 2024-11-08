
// Funksjoner:
function setHeading() {
    let fname = prompt("Skriv inn navnet ditt"); 
    let firstname = document.getElementById("firstname"); 
    let heading = document.getElementById("heading"); 
    heading.innerText = "Velkommen, " + firstname.value; 
    heading.style.color = "red"; 
}
