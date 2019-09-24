/*
    This ia an IIFE - Immediately Invoked Function Expression
    IIFEs run as soon as they are defined. IIFEs are commonly used to keep variables/functions outside of the global scope and they tend to work better if you're running multiple scripts.
*/

// This variable exists in the global scope, which means it's less secure and can be accessed by anything
var global;

(function() {
    // Because this variable is inside of an IIFE, it is not in the global scope
    var variable = 10;

    // Make refernaces to our elements that we're going to interact with
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results")
    var submitButton = document.getElementById("submit")
    var resetButton = document.getElementById("reset")

    var myQuestions = [];

    // What does a quiz question consist of?
    // Question Text, Answer Choices, Correct Answer

    var exampleQuestion = {
        question: "What color is the sky?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green",
        },
        correctAnswer: "a"
    }

    var question2 = {
        question: "What is the answer to life, the universe, and everything?",
        answers: {
            a: "To enjoy how you live your life",
            b: "To worship a higher power",
            c: "42",
            d: "Don't know",
        },
        correctAnswer: "c"
    }

    var question3 = {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: ""
    }

    // Add the question objects to our array of questions
    myQuestions.push(question1, question2, question3)


    // Function to build a quiz that goes through our question objects and generates HTML for each question
    function buildQuiz() {

    }

    // Function to show the results of the quiz
    function showResults() {

    }

    // Function to reset the quiz
    function resetQuiz() {

    }
    
})();