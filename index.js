var randomNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector("button").addEventListener("click", function() {
  this.innerText = randomNumber + " %";
  titleChange(randomNumber);
  document.querySelector("button").classList.add("pressed");
  setTimeout( function(){
    document.querySelector("button").classList.remove("pressed");
  }, 100);
  var audio = new Audio("sound/button-30.mp3");
  audio.play();
});

function titleChange(randomNumber) {
  if (randomNumber >= 80) {
    document.querySelector("#title").innerText = "Your Love is like Romeo & Juliet!!";
  } else if (randomNumber < 80 & randomNumber>= 30) {
    document.querySelector("#title").innerText = "Moderate Love story!!";
  } else if (randomNumber < 30) {
    document.querySelector("#title").innerText = "Your Love is like Oil & Water!!";
  }
}
