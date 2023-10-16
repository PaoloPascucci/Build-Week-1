let correctAnswer = 0;
let wrongAnswer = 0;

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

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
  start();
}

window.onload = function () {
  const inputCheck = document.getElementById("check");
  const linkButton = document.getElementById("proceedButton");

  const toggleLink = function () {
    if (inputCheck.checked) {
      linkButton.setAttribute("href", "./questions.html");
    } else {
      linkButton.removeAttribute("href");
    }
  };

  start();
};
