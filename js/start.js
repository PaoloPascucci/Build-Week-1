const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");
const radioButtonEasy = document.getElementById("easy");
const radioButtonHard = document.getElementById("hard");
console.log("easy:", radioButtonEasy);
console.log("hard:", radioButtonHard);
const hardValue = radioButtonHard.parentElement.innerText.toLowerCase();
const easyValue = radioButtonEasy.parentElement.innerText.toLowerCase();
// console.log(hardValue);

function toggle() {
  if (inputCheck.checked && radioButtonHard.checked) {
    linkButton.setAttribute = ("href", "./questions.html?difficoltà=hard");
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonEasy.checked) {
    linkButton.setAttribute = ("href", "./questions.html?difficoltà=easy");
    console.log(linkButton);
  } else {
    linkButton.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    console.log(linkButton);
  }
}
inputCheck.addEventListener("change", toggle);
