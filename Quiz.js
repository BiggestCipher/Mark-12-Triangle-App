const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = [
    "obtuse",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
];

function calculateScore() {
    const formResults = new FormData(quizform);
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    // console.log("The score is "+score);
    outputEl.innerText = "The score is " + score;
  }
  
  submitBtn.addEventListener("click", calculateScore);