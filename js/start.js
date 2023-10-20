const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");
const radioButtonEasy = document.getElementById("easy");
const radioButtonHard = document.getElementById("hard");
const radioButtonMedium = document.getElementById("medium");

// console.log(hardValue);

function toggle() {
  if (inputCheck.checked && radioButtonHard.checked) {
    linkButton.href = "./questions.html?difficoltà=hard";
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonEasy.checked) {
    linkButton.href = "./questions.html?difficoltà=easy";
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonMedium.checked) {
    linkButton.href = "./questions.html?difficoltà=medium";
  } else {
    linkButton.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    // console.log(linkButton);
  }
}
inputCheck.addEventListener("change", toggle);
