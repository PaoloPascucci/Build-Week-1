
document.addEventListener("DOMContentLoaded", function () {
  let currentQuestionsIndex = 0;
  const h2 = document.querySelector("h2");
  const title = document.querySelector("h1");
  const aContainer = document.querySelector(".answersContainer");

  const start = function () {
    const question = questions[currentQuestionsIndex];
    if (question) {
      title.innerText = question.question;
      aContainer.innerHTML = "";

      if (question.type === "boolean") {
        createRadioOption(question.correct_answer);
        createRadioOption(question.incorrect_answers[0]);
      } else {
        createRadioOption(question.correct_answer);
        question.incorrect_answers.forEach((incorrectAnswer) => {
          createRadioOption(incorrectAnswer);
        });
      }
      h2.innerText = "QUESTION " + (currentQuestionsIndex + 1) + "/" + questions.length;
    }
  };


  function createRadioOption(value) {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "risposta");
    radio.setAttribute("value", value);
    const label = document.createElement("label");
    label.innerText = value;

    aContainer.appendChild(radio);
    aContainer.appendChild(label);
  }

  function checkAnswer() {
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length === 1) {
      const selectedAnswer = radioButtons[0].value;
      const question = questions[currentQuestionsIndex];
      if (selectedAnswer === question.correct_answer) {
        correctAnswer++;
      } else {
        wrongAnswer++;
      }
    }

    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
      start(); // Display the next question
    } else {
      window.location.href = `result.html?correct=${correctAnswer}&wrong=${wrongAnswer}`;
    }
  }
  aContainer.addEventListener("change", checkAnswer);
  start()
});