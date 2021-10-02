const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputTl = document.querySelector(".output");

function sumAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle() {
    const sum = sumAngles(
        Number(inputs[0].value),
        Number(inputs[1].value), 
        Number(inputs[2].value)
    );
    if (sum === 180) {
        console.log("Yes, the Angles form a Triangle!");
        outputTl.innerText = "Yes, the Angles form a Triangle!";
    } else {
        console.log("Sorry! The Angles doesn't form a Triangle!");
        outputTl.innerText = "Sorry! The Angles doesn't form a Triangle!";
    }
}

isTriangleButton.addEventListener("click", isTriangle);