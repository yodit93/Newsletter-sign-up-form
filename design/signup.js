const signupForm = document.querySelector('.form');
const emailInput = document.querySelector('.email');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = emailInput.value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!pattern.test(userEmail)) {
        emailInput.classList.add('errorstate');
        document.querySelector('.error').classList.add('show');
        return;
    }
    else {
        localStorage.setItem("userEmail", userEmail);
        window.location.href = "success.html";
    }
});

emailInput.addEventListener('input', () => {
    emailInput.classList.remove('errorstate');
    document.querySelector('.error').classList.remove('show');
})
