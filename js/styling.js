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
