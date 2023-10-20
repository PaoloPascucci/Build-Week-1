const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");
const radioButtonEasy = document.getElementById("easy");
const radioButtonHard = document.getElementById("hard");
const radioButtonMedium = document.getElementById("medium");
const numberInput = document.getElementById("number");
let inputValue = 0


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

numberInput.addEventListener("input", function() {
 inputValue = parseInt(numberInput.value, 10);

  if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 10) {
  } else {
    alert("inserisci un numero da 3 a 10 massimo")
  }
});

function toggle() {
  if (inputCheck.checked && radioButtonHard.checked) {
    
    linkButton.href = `./questions.html?difficoltà=hard&amount=${inputValue}`;
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonEasy.checked) {
    linkButton.href = `./questions.html?difficoltà=easy&amount=${inputValue}`;
    console.log(linkButton);
  } else if (inputCheck.checked && radioButtonMedium.checked) {
    
    linkButton.href = `./questions.html?difficoltà=medium&amount=${inputValue}`;
    console.log(linkButton);
  } else {
    linkButton.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    console.log(linkButton);
  }
}
difficulty.forEach(element => {
  element.addEventListener("change", toggleCheck)
});
inputCheck.addEventListener("change", toggle);
toggleCheck();