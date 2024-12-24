const text = "Happy!!🍾 one month aniversary to you my dear❤️.After a alot of struggle and messy situation we started our relationship🌹, which has grown over this past month. yeah it might not be a very long time but trust me, this one month has been the best one month of my life, I have waited for this for a long time , sometimes I feel like I am living in a dream.Sudhu ei bhabei amra jano amder baki jibonta katiye dite pari...jani akhon sob e suru amader relationship e onek hurdels asbe but tui just amar saathe thakis  I promise you that no matter how many hurdles we face, we can overcome them together.. Tui amk kodin aage jei kotha bolechilis I might get hurt 'we should break up'...let me tell you some thing tui jodi amk sotti bhalobashis tahole ami toke joto ta chini you will never hurt me. Because tui nijer kacher manus der care korte khub bhalo parish even jara kacher na tader o care korish, that's a quality I love in you. Just promise me that whenever such thoughts arise in your mind, you will immediately call or text me and not keep them to yourself. Always remember, I LOVE YOU 💕 and will continue to Love you until my last breath."


const words = text.split(' ');
const typewriterElement = document.getElementById('typewriter');
const questionElement = document.getElementById('question');
let index = 0;

function typeWord() {
    if (index < words.length) {
        typewriterElement.innerHTML += words[index] + ' ';
        index++;
        setTimeout(typeWord, 200); // Adjust time for how long each word is displayed
    } else {
        // Show the question after typing is done
        questionElement.style.display = 'block';
    }
}

// Start typing
typeWord();

// Function to create string lights
function createStringLights() {
    const stringLightsContainer = document.getElementById('stringLights');
    for (let i = 0; i < 35; i++) { // Adjust number of lights
        const light = document.createElement('div');
        light.className = 'light';
        light.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        light.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        stringLightsContainer.appendChild(light);
    }
}

// Call the function to create string lights
createStringLights();

// Function to create falling roses
function createFallingRoses() {
    for (let i = 0; i < 150; i++) { // Adjust number of roses
        const rose = document.createElement('div'); // Create a div for the rose
        rose.className = 'rose';
        rose.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        rose.style.animationDuration = (Math.random() * 12 + 7) + 's'; // Random fall duration
        document.body.appendChild(rose);

        // Remove the rose after the animation ends
        rose.addEventListener('animationend', () => {
            rose.remove();
        });
    }
}

// Call the function to create falling roses
createFallingRoses();

// Handle button clicks
document.getElementById('yesButton').addEventListener('click', function() {
    // Redirect to the next page
    window.location.href = "surprise page.html"; // Change to your desired URL
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    // Make the "No" button hover around
    const randomX = Math.random() * 100; // Random horizontal position
    const randomY = Math.random() * 100; // Random vertical position
    this.style.position = 'absolute';
    this.style.left = randomX + 'vw';
    this.style.top = randomY + 'vh';
});