let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function submitComment() {
    const comment = document.getElementById('myComment').value;
    const commentsDisplay = document.getElementById('commentsDisplay');
    const newComment = document.createElement('p');
    newComment.textContent = comment;
    commentsDisplay.appendChild(newComment);
    document.getElementById('myComment').value = ''; // Clear textarea after submission
}

// Email and Password Validation Functions (Unchanged)
function validateEmail() {
    const emailField = document.getElementById('email');
    const emailFeedback = document.getElementById('emailFeedback');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!emailField.value) {
        emailFeedback.textContent = "Email is required.";
    } else if (!emailPattern.test(emailField.value)) {
        emailFeedback.textContent = "Please enter a valid email address.";
    } else {
        emailFeedback.textContent = ""; // Clear feedback if valid
    }
}

function validatePassword() {
    const passwordField = document.getElementById('password');
    const passwordFeedback = document.getElementById('passwordFeedback');
    
    if (passwordField.value.length < 8) {
        passwordFeedback.textContent = "Password must be at least 8 characters long.";
    } else {
        passwordFeedback.textContent = ""; // Clear feedback if valid
    }
}

// Form Submission Prevention on Validation Errors
document.getElementById('registrationForm').onsubmit = function(event) {
    validateEmail();
    validatePassword();

    const emailFeedback = document.getElementById('emailFeedback').textContent;
    const passwordFeedback = document.getElementById('passwordFeedback').textContent;

    if (emailFeedback || passwordFeedback) {
        event.preventDefault(); // Stop form submission
        alert("Please correct the errors before submitting.");
    }
};

// Keypress Detection
document.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);  // Log the key pressed
});

// Button Click Event Handling
const submitButton = document.querySelector('button[type="submit"]'); // Assuming there's a submit button in the form
if (submitButton) {
    submitButton.addEventListener('click', (event) => {
        alert("Submit button clicked!"); // Action on button click
    });
}

// Hover Effects for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = 'blue'; // Change color on hover
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = ''; // Reset color
    });
});

// Mouse Move Color Change for Navigation Links
document.body.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    navLinks.forEach(link => {
        const newColor = `rgb(${Math.floor(x * 255)}, ${Math.floor(y * 255)}, 150)`; // Change RGB values based on cursor position
        link.style.color = newColor; // Apply the new color to each link
    });
});

// Bonus: Secret Action for Double Click or Long Press
const commentBox = document.getElementById('myComment');
let pressTimer;

// Double Click Action
commentBox.addEventListener('dblclick', () => {
    alert('Double-click detected! Here’s a secret action!'); // Action on double-click
});

// Long Press Action
commentBox.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert('Long press detected! Here’s a secret action!'); // Action on long press
    }, 800); // 800 ms for long press
});

commentBox.addEventListener('mouseup', () => {
    clearTimeout(pressTimer); // Clear timer on mouse up
});
commentBox.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer); // Clear timer on mouse leave
});