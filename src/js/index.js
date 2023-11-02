import mobileNav from './modules/mobile-nav.js';
mobileNav();

                    /* NAME */

const nameInput = document.getElementById('nameInput');
const nameError = document.getElementById('nameError');

nameInput.addEventListener('input', function() {
    const name = nameInput.value;
    
    if (name.trim() === '' || /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+$/.test(name) && name.length <= 20) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Your name is not acceptable. Use only letters, up to 20 characters.';
        if (name.length > 20) {
            nameInput.value = name.slice(0, 20); 
        }
    }
});

              /* EMAIL */

const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.trim() === '') {
        emailError.textContent = '';
    } else if (emailRegex.test(email)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Please enter a valid email address.';
    }
});