import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard () {
      const values = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "J", "Q", "K", "A"
  ];

  
  const randomSuit = Math.floor(Math.random() * 4) + 1; 
  const randomValue = Math.floor(Math.random() * 13);   

  let suitSymbol = "";
  let suitClass = "";

  
  if (randomSuit === 1) {
    suitSymbol = "♥";
    suitClass = "heart";
  } else if (randomSuit === 2) {
    suitSymbol = "♦";
    suitClass = "diamond";
  } else if (randomSuit === 3) {
    suitSymbol = "♠";
    suitClass = "spade";
  } else {
    suitSymbol = "♣";
    suitClass = "club";
  }

  document.getElementById("value").innerText = values[randomValue];

 
  document.getElementById("top-suit").innerText = suitSymbol;
  document.getElementById("bottom-suit").innerText = suitSymbol;

  
  const card = document.getElementById("card");
  card.className = "card";
  card.classList.add(suitClass);


}

window.onload = function() {

  generateCard();

  let timeLeft = 10;

setInterval(() => {

  timeLeft = timeLeft -1 ;

  document.getElementById("countdown").innerText = timeLeft;

  if (timeLeft === 0) {
    generateCard();
    timeLeft = 10; 
  }

  }, 1000);


  document.getElementById("change-size").addEventListener("click", function() {

  const width = document.getElementById("width-input").value;
  const height = document.getElementById("height-input").value;

  const card = document.getElementById("card");

  card.style.width = width + "px";
  card.style.height = height + "px";
});

  

  document.getElementById("new-card").addEventListener("click", generateCard);
  
};