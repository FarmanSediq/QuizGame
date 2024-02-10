const questions = [
    {
        question:"Which is largest animal in te world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },
    {
        question:"Which is largest animal in te world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },
    {
        question:"What is 9x8-12x3+2",
        answers:[
            {text: "38", correct: true},
            {text: "76", correct: false},
            {text: "33", correct: false},
            {text: "12", correct: false},

        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},

        ]
    },
    {
        question:"Who has more population?",
        answers:[
            {text: "China", correct: true},
            {text: "India", correct: false},
            {text: "USA", correct: false},
            {text: "Europe", correct: false},

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
