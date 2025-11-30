// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Button click
function showMessage() {
    alert("Welcome to ProCompany! Let's build something amazing.");
}

// Contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    form.reset();
});
