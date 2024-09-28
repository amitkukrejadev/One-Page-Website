// Typing Animation Function
function typeWriter(element, text, speed, pauseBeforeClearing) {
    let i = 0; // Index for the current character

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Append the next character
            i++; // Move to the next character
            setTimeout(type, speed); // Call this function again after 'speed' milliseconds
        } else {
            // Wait for the specified pause before clearing the text
            setTimeout(() => {
                element.innerHTML = ''; // Clear the text
            }, pauseBeforeClearing); // Pause duration
        }
    }

    type(); // Start typing
}

// Initialize Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-animation'); // Select the element for typing
    const textToType = "Hello, I'm Amit Kukreja"; // The text to type
    const typingSpeed = 100; // Typing speed in milliseconds
    const pauseBeforeClearing = 90 * 1000; // Pause for 90 seconds (1.5 minutes)

    // Ensure the text is cleared before starting typing again
    typingElement.innerHTML = ''; // Clear any existing text
    typeWriter(typingElement, textToType, typingSpeed, pauseBeforeClearing);
});

// Form Validation
document.querySelector('form').addEventListener('submit', (event) => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.'); // Alert if any fields are empty
        event.preventDefault(); // Prevent form submission
    }
});

// Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle'); // Get menu toggle button
const navbar = document.getElementById('navbar'); // Get the navbar element

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Toggle 'show' class to slide in/out
});

