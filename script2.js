const questions = [
    "What is your comfort food ?",
    "what is favorite Movie ?",
    "what made you fall for me ?",
    "One habbit that you don't like.",
    "when we are going out next ?"
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const nextButton = document.getElementById('next-button');
const proceedButton = document.getElementById('proceed-button');
const questionContainer = document.getElementById('question-container');

// Function to show the current question
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
        answerElement.value = '';
        questionContainer.classList.add('show'); // Add class to trigger animation
    } else {
        // Show a pop-up message after completing all questions
        alert("There is a message waiting for you!!❤️💕");
        // Redirect to the existing page after the user acknowledges the alert
        window.location.href = "second page.html"; // Change this to your desired page
    }
}

// Function to handle the next button click
nextButton.addEventListener('click', () => {
    const answer = answerElement.value;
    if (answer) {
        // Send the answer to the server
        fetch('http://localhost:3000/responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            currentQuestionIndex++;
            showQuestion();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    } else {
        alert("Please provide an answer before proceeding.");
    }
});

// Function to handle the proceed button click
proceedButton.addEventListener('click', () => {
    proceedButton.style.display = 'none'; // Hide the proceed button
    questionContainer.style.display = 'block'; // Show the question container
    showQuestion(); // Show the first question
});

// Start with the proceed button visible