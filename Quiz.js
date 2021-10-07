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
      totalValues= 0;
    for (let value of formResults.values()) {
      totalValues =totalValues+1;
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    if(totalValues<5){
      outputEl.innerText = "Please Answer all the Questions before submitting."
    } else {
    outputEl.innerText = "The score is " + score;
  }}
  
  submitBtn.addEventListener("click", calculateScore);