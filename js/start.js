const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");
const radioButtonEasy = document.getElementById("easy");
const radioButtonHard = document.getElementById("hard");
const radioButtonMedium = document.getElementById("medium");
const textBoxQuestions = document.getElementById("text").value;

// const numberOfQuestion = textBoxQuestions.value;
// console.log(numberOfQuestion);

const difficulty = document.querySelectorAll(".difficulty")


function toggleCheck() {
  difficulty.forEach(element => {
    element.classList.remove("isChecked");
  });

  if (radioButtonEasy.checked) {
    radioButtonEasy.parentElement.classList.add("isChecked");
    enableRadio(radioButtonEasy);
    disableRadio(radioButtonMedium);
    disableRadio(radioButtonHard);
  } else if (radioButtonMedium.checked) {
    radioButtonMedium.parentElement.classList.add("isChecked");
    disableRadio(radioButtonEasy);
    enableRadio(radioButtonMedium);
    disableRadio(radioButtonHard);
  } else if (radioButtonHard.checked) {
    radioButtonHard.parentElement.classList.add("isChecked");
    disableRadio(radioButtonEasy);
    disableRadio(radioButtonMedium);
    enableRadio(radioButtonHard);
  }
}

function enableRadio(radio) {
  if (radio) {
    radio.disabled = false;
    const nextSibling = radio.nextElementSibling;
    if (nextSibling) {
      nextSibling.classList.remove("disable");
    }
    const container = radio.parentElement;
    if (container) {
      container.classList.remove("isNotChecked");
    }
  }
}

function disableRadio(radio) {
  if (radio) {
    radio.disabled = true;
    const nextSibling = radio.nextElementSibling;
    if (nextSibling) {
      nextSibling.classList.add("disable");
    }
    const container = radio.parentElement;
    if (container) {
      container.classList.add("isNotChecked");
    }
  }
}

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
  }
}
difficulty.forEach(element => {
  element.addEventListener("change", toggleCheck)
});
inputCheck.addEventListener("change", toggle);
toggleCheck();