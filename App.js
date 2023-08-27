import { fetchColorPairs, getRandomPair } from "./colorFunctions.js"

document.addEventListener("DOMContentLoaded", async () => {
  const colorPairs = await fetchColorPairs();
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

    const colorElements = document.querySelectorAll(".color");
    colorElements.forEach((colorElement, index) => {
      colorElement.style.backgroundColor = randomColorPair[index];
      colorElement.dataset.index = index;
      colorElement.addEventListener("click", handleClick);
    });
  }

  loadNextRound();
});