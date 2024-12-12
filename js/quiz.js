// Ein funksjon som sjekker kva ein har svart på spørsmål
function checkAnswer() {
    let q1a = document.getElementById("q1a"); 
    let q2b = document.getElementById("q2b"); 
    let resultText = document.getElementById("resultText"); 
    let result = 0; 
  
    if (q1a.checked) {
        result++; 
    }
    if (q2b.checked) {
        result++;
    }

    resultText.innerText = "Du har svart riktig på " + result + " spørsmål."; 
}