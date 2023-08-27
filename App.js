import { getRandomPair } from "./colorFunctions.js"

const colorPairs = {
  "black": "darkgreen",
  "blue": "mediumblue",
  "blueviolet": "darkviolet",
  "brown": "sienna",
  "cadetblue": "lightslategray",
  "chocolate": "darkgoldenrod",
  "cornflowerblue": "mediumslateblue",
  "crimson": "firebrick",
  "darkblue": "midnightblue",
  "darkcyan": "seagreen",
  "darkgoldenrod": "chocolate",
  "darkgreen": "forestgreen",
  "darkmagenta": "mediumvioletred",
  "darkolivegreen": "olivedrab",
  "darkorchid": "mediumorchid",
  "darkred": "firebrick",
  "darkslateblue": "rebeccapurple",
  "darkslategray": "darkolivegreen",
  "darkslategrey": "darkolivegreen",
  "darkviolet": "blueviolet",
  "deeppink": "mediumvioletred",
  "dimgray": "gray",
  "dimgrey": "gray",
  "dodgerblue": "royalblue",
  "firebrick": "crimson",
  "forestgreen": "green",
  "fuchsia": "deeppink",
  "gray": "dimgray",
  "green": "forestgreen",
  "grey": "dimgray",
  "indianred": "peru",
  "indigo": "purple",
  "lightslategray": "cadetblue",
  "lightslategrey": "cadetblue",
  "magenta": "deeppink",
  "maroon": "firebrick",
  "mediumblue": "blue",
  "mediumorchid": "mediumpurple",
  "mediumpurple": "mediumslateblue",
  "mediumslateblue": "mediumpurple",
  "mediumvioletred": "deeppink",
  "midnightblue": "navy",
  "navy": "midnightblue",
  "olive": "olivedrab",
  "olivedrab": "darkolivegreen",
  "orangered": "chocolate",
  "palevioletred": "indianred",
  "peru": "chocolate",
  "purple": "indigo",
  "rebeccapurple": "darkslateblue",
  "red": "orangered",
  "royalblue": "slateblue",
  "saddlebrown": "sienna",
  "seagreen": "forestgreen",
  "sienna": "saddlebrown",
  "slateblue": "mediumslateblue",
  "slategray": "cadetblue",
  "slategrey": "cadetblue",
  "steelblue": "cadetblue",
  "teal": "seagreen",
  "tomato": "indianred"
}

document.addEventListener("DOMContentLoaded", async () => {
  let score = 0;
  let randomColorPair, correctAnswerIndex, correctAnswer;
  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
  }

  function handleClick(event) {
    if (event.target.style.backgroundColor == correctAnswer) {
      score++;
      updateScore();
      loadNextRound();
    }
  }

  function loadNextRound() {
    randomColorPair = getRandomPair(colorPairs);
    correctAnswerIndex = Math.random() > 0.5 ? 0 : 1;
    correctAnswer = randomColorPair[correctAnswerIndex];

    const colorNameElement = document.getElementById("colorName");
    colorNameElement.textContent = correctAnswer;
    colorNameElement.style.color = correctAnswer;
    const colorElements = document.querySelectorAll(".color");
    colorElements.forEach((colorElement, index) => {
      colorElement.style.backgroundColor = randomColorPair[index];
      colorElement.dataset.index = index;
      colorElement.addEventListener("click", handleClick);
    });
  }

  loadNextRound();
});