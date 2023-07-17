const questions = [
    {
        question: "What was the most used programming language in 2019?",
        choices: ["Java", "C", "Python", "JavaScript"],
        correctAnswer: 3 // Index of "JavaScript" in the choices array
    },
    {
        question: "Who is the President of the US?",
        choices: ["Donald Trump", "Joe Biden", "Hillary Clinton", "Bernie Sanders"],
        correctAnswer: 1 // Index of "Joe Biden" in the choices array
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "None of the above"],
        correctAnswer: 0 // Index of "Hypertext Markup Language" in the choices array
    },
    {
        question: "What year was JavaScript launched?",
        choices: ["1993", "1994", "1995", "1996"],
        correctAnswer: 2 // Index of "1995" in the choices array
    }
];


const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

let currentQuestion = 0;
let numCorrect = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    const choices = question.choices.map((choice, index) =>
        `<label>
            <input type="radio" name="question" value="${index}">
            ${choice}
        </label>`
    ).join("");

    quizContainer.innerHTML = `
        <h2 class="question">${question.question}</h2>
        <div class="choices">${choices}</div>
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (!selectedOption) {
        return; // No answer selected
    }

    const answer = selectedOption.value;
    if (answer === questions[currentQuestion].correctAnswer) {
        numCorrect++;
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
        showResults();
    } else {
        displayQuestion();
    }
}


function showResults() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions.length} questions correct!`;
    resultsContainer.style.display = "block";
}

submitButton.addEventListener("click", checkAnswer);

displayQuestion();
