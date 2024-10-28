const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date"); 
const dayElement = document.getElementById("day"); 
let textday = ""; 

const now = new Date(); 
dateElement.innerText = now.toLocaleDateString();
let day = now.getDay(); 

if (day == 1) {
    textday = "Mandag"; 
}
else if (day == 2) {
    textday = "Tirsdag"; 
}
else if (day == 3) {
    textday = "Onsdag"; 
}
else if (day == 4) {
    textday = "Tirsdag"; 
}
else if (day == 5) {
    textday = "Onsdag"; 
}

dayElement.innerText = textday;

function updateTime() {
   const now = new Date();
   timeElement.textContent = now.toLocaleTimeString();
}

// Call updateTime every second (1000 milliseconds)
setInterval(updateTime, 1000);
// Initial call to display the time immediately
updateTime();

