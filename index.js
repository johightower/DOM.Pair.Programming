let total = 0
let incriment = document.querySelector("div")
const button = document.querySelector("button");
button.addEventListener("click", function() { 
    total = total + 1;
    incriment.textContent = total
    incriment.style.fontSize = "50px"
});





