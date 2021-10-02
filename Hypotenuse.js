const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-button");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares; 
}

function calculateHypotenuse() {
  if(Number(sides[0].value)>0 && Number(sides[1].value)>0) {
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  const roundedHypo = lengthOfHypotenuse.toFixed(3);
  outputEl.innerText = "The length of hypotenuse is " + roundedHypo +" units.";
} else {
  outputEl.innerText = "Please enter positive values!"
}
}

calculateBtn.addEventListener("click", calculateHypotenuse);