document.addEventListener("DOMContentLoaded", function () {
  let currentQuestionsIndex = 0;
  const h2 = document.querySelector("h2");
  const title = document.querySelector("h1");
  const aContainer = document.querySelector(".answersContainer");
  let intervalID;
  const urlParams = new URLSearchParams(window.location.search);
  const difficultyTest = urlParams.get("difficoltà");
  let array;

  if (difficultyTest === "easy") {
    array = questions;
  } else if (difficultyTest === "medium") {
    array = mediumQuestions;
  } else {
    array = arrayQuestions;
  }

  console.log(array);

  const start = function () {
    clearInterval(intervalID);
    const newQuestions = array[currentQuestionsIndex];
    if (newQuestions) {
      title.innerText = newQuestions.question;
      aContainer.innerHTML = "";

      if (newQuestions.type === "boolean") {
        createRadioOption(newQuestions.correct_answer);
        createRadioOption(newQuestions.incorrect_answers[0]);
      } else {
        createRadioOption(newQuestions.correct_answer);
        newQuestions.incorrect_answers.forEach((incorrectAnswer) => {
          createRadioOption(incorrectAnswer);
        });
      }
      h2.innerHTML = `<span>QUESTION ${currentQuestionsIndex + 1}</span> / ${array.length}`;
    }
    progress();
  };

  function progress() {
    let counterElement = document.getElementById("counter");
    let donut = document.getElementById("donut");
    let counter = 30; // Initialize the counter to 30
    let count = 0;

    intervalID = setInterval(() => {
      counter--;
      count++;
      counterElement.innerHTML = `seconds<span>${counter}</span>remaining`;
      donut.style.background = `conic-gradient( #ededed ${count * 12}deg, #3498db 0.5deg)`;
      if (counter <= 0) {
        count = 0;
        counter = 30;
        currentQuestionsIndex++;
        wrongAnswer++;
        if (currentQuestionsIndex < array.length) {
          start(); // Display the next question
        } else {
          window.location.href = `result.html?correct=${correctAnswer}&wrong=${wrongAnswer}&array=${array}`;
        }
      }
    }, 1000);
  }

  function stopCounter() {
    clearInterval(intervalID);
  }

  function createRadioOption(value) {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "risposta");
    radio.setAttribute("value", value);
    const label = document.createElement("label");
    label.className = "questionsClass";
    label.innerText = value;

    label.appendChild(radio);
    aContainer.appendChild(label);
  }

  function checkAnswer() {
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length === 1) {
      const selectedAnswer = radioButtons[0].value;
      const labelParent = radioButtons[0].parentElement;
      const newQuestions = array[currentQuestionsIndex];

      console.log("question:", newQuestions);
      console.log("selected:", selectedAnswer);
      if (selectedAnswer === newQuestions.correct_answer) {
        labelParent.style.backgroundColor = "green";
        correctAnswer++;
      } else {
        labelParent.style.backgroundColor = "red";
        wrongAnswer++;
      }
    }

    setTimeout(function () {
      currentQuestionsIndex++;
      if (currentQuestionsIndex < array.length) {
        stopCounter();
        start(); // Display the next question
      } else {
        window.location.href = `result.html?correct=${correctAnswer}&wrong=${wrongAnswer}&array=${array}`;
      }
    }, 1000);
  }

  aContainer.addEventListener("change", checkAnswer);
  start();
});
