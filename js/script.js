const inputCheck = document.getElementById("check");
const linkButton = document.getElementById("proceedButton");

const toggleLink = function()
{
    if(inputCheck.checked)
    {
        linkButton.setAttribute("href", "./questions.html");
    }
    else
    {
        linkButton.removeAttribute("href");
    }
}



let correctAnswer = 0;
let wrongAnswer = 0;





window.onload = function () {

    const questions = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does CPU stand for?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
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
          question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
          correct_answer: ".svg",
          incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
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
          question:
            "Which programming language shares its name with an island in Indonesia?",
          correct_answer: "Java",
          incorrect_answers: ["Python", "C", "Jakarta"],
        },
      ];

      const main = document.querySelector("main");
      const title = document.querySelector("h1");
      const aContainer = document.querySelector(".answersContainer");
      title.classList="title";

      const start = function()
      {
        for (let i = 0; i < questions.length; i++) {
            const element = questions[i];
            title.innerText = element.question;
            if (element.type === "boolean") {
                const radio1 = document.createElement("input");
                radio1.setAttribute ("type", "radio");
                radio1.setAttribute("name", "risposta");
                radio1.setAttribute ("value", element.correct_answer);
                const label1 = document.createElement("label");
                label1.innerText=element.correct_answer;
                const radio2 = document.createElement("input");
                radio2.setAttribute ("type", "radio");
                radio2.setAttribute("name", "risposta");
                radio2.setAttribute ("value", element.incorrect_answers[0]);
                
                const label2 = document.createElement("label");
                label2.innerText=element.incorrect_answers[0]; 
                
                

                aContainer.appendChild(radio1);
                aContainer.appendChild(label1);
                aContainer.appendChild(radio2);
                aContainer.appendChild(label2);
            }
            else
            {
                const radio1 = document.createElement("input");
                radio1.setAttribute ("type", "radio");
                radio1.setAttribute("name", "risposta");
                radio1.setAttribute ("value", element.correct_answer);
                const label1 = document.createElement("label");
                label1.innerText=element.correct_answer;
    
                const radio2 = document.createElement("input");
                radio2.setAttribute ("type", "radio");
                radio2.setAttribute("name", "risposta");
                radio2.setAttribute ("value", element.incorrect_answers[0]);
                const label2 = document.createElement("label");
                label2.innerText=element.incorrect_answers[0]; 
    
                const radio3 = document.createElement("input");
                radio3.setAttribute ("type", "radio");
                radio3.setAttribute("name", "risposta");
                radio3.setAttribute ("value", element.incorrect_answers[1]);
                const label3 = document.createElement("label");
                label3.innerText=element.incorrect_answers[1]; 
    
                const radio4 = document.createElement("input");
                radio4.setAttribute ("type", "radio");
                radio4.setAttribute("name", "risposta");
                radio4.setAttribute ("value", element.incorrect_answers[2]);
                const label4 = document.createElement("label");
                label4.innerText=element.incorrect_answers[2]; 

                aContainer.appendChild(radio1);
                aContainer.appendChild(label1);
                aContainer.appendChild(radio2);
                aContainer.appendChild(label2);
                aContainer.appendChild(radio3);
                aContainer.appendChild(label3);
                aContainer.appendChild(radio4);
                aContainer.appendChild(label4);
            }
    
            const h2 = document.querySelector("h2");
            h2.innerText="QUESTION " + (i+1) + "/" + questions.length;
        }

            const checkAnswer = function()
            {
                const radioButtons = document.querySelectorAll('input[type="radio"]');
                const selectedRadioButtons = Array.from(radioButtons);

                let selectedAnswer;

                for (const element of selectedRadioButtons) {
                    if(element.checked)
                    {
                        selectedAnswer=element.value;
                        break;
                    }
                    
                }

                if(selectedAnswer)
                {
                    if(selectedAnswer === element.correct_answer)
                    {
                        correctAnswer++;
                    }
                    else
                    {
                        wrongAnswer++;
                    }   
                }
            }
            

      }


      start();

      


};



