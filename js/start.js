const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");
const radioButtonEasy = document.getElementById("easy");
const radioButtonHard = document.getElementById("hard");
const radioButtonMedium = document.getElementById("medium");
const textBoxQuestions = document.getElementById("text").value;

// const numberOfQuestion = textBoxQuestions.value;
// console.log(numberOfQuestion);

// console.log(hardValue);

function toggle() {
  if (inputCheck.checked && radioButtonHard.checked) {
    const textBoxQuestions = document.getElementById("text").value;
    linkButton.href = `./questions.html?difficoltà=hard&amount=${textBoxQuestions}`;
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonEasy.checked) {
    const textBoxQuestions = document.getElementById("text").value;
    linkButton.href = `./questions.html?difficoltà=easy&amount=${textBoxQuestions}`;
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonMedium.checked) {
    const textBoxQuestions = document.getElementById("text").value;
    linkButton.href = `./questions.html?difficoltà=medium&amount=${textBoxQuestions}`;
  } else {
    linkButton.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    // console.log(linkButton);
  }
}
inputCheck.addEventListener("change", toggle);
