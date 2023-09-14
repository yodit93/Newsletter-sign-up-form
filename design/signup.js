const signupForm = document.querySelector('.form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('#email');
    const userEmail = emailInput.value;
    localStorage.setItem("userEmail", userEmail);
    window.location.href = "success.html";
});
