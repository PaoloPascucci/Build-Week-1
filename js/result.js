const urlParams = new URLSearchParams(window.location.search);
const NcorrectAnswer = urlParams.get("correct");
const NwrongAnswer = urlParams.get("wrong");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const correctContainer = document.querySelector(".correctContainer");
const wrongContainer = document.querySelector(".wrongContainer");
const message = document.querySelector(".message");
const difficultyTest = urlParams.get("difficoltà");
const amountOfQuestions = urlParams.get("amount");
let array;

if (difficultyTest === "easy") {
  array = easyQuestions;
} else if (difficultyTest === "medium") {
  array = mediumQuestions;
} else {
  array = hardQuestions;
}

const WinMessagge = `<span>Congratulations</span><br>
<span class="correct">You passed the exam.</span><br><span>
We'll send you the certificate<br>
in few minutes.<br><br>
Check your email (including
promotions / spam folder)</span>`;
const LoseMessage = `<span>Failed</span><br>
<span class="failed">You failed the exam.</span><br><span>
We'll send you the certificate<br>
in few minutes.<br><br>
Check your email (including
promotions / spam folder)</span>`;

console.log(correctContainer);
console.log(wrongContainer);

let totalC = (NcorrectAnswer / amountOfQuestions) * 100;
let totalW = (NwrongAnswer / amountOfQuestions) * 100;

if (totalC > totalW) {
  message.innerHTML = WinMessagge;
  wrongContainer.classList.add("visible");
} else {
  message.innerHTML = LoseMessage;
  correctContainer.classList.add("visible");
}

correctContainer.innerHTML =
  '<p class="NC">Correct<br><b>' +
  totalC +
  "%</b></p> <span>" +
  NcorrectAnswer +
  "/" +
  amountOfQuestions +
  " questions</span>";
wrongContainer.innerHTML =
  '<p class="NW">Wrong<br><b>' +
  totalW +
  "%</b></p> <span>" +
  NwrongAnswer +
  "/" +
  amountOfQuestions +
  " questions</span>";
const progress = document.querySelector(".progress");
const circle = document.getElementById("circle");
const gradient = `conic-gradient(#c2138c ${totalW * 3.6}deg, #02ffff 1deg)`;
progress.style.background = gradient;
