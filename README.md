# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
## Sign-up form with success message: is a challenge from Frontend Mentor website. The challenge is to build out this newsletter form and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-signup.PNG)

### Links

- Live Site URL: [Live Site](https://yodit93.github.io/Newsletter-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- JavaScript

### What I learned
- Regular expressions
- JavaScript DOM manipulation
- Handling form validation with JavaScript
- Using CSS pseudo-class selectors
- Using window.location.href to redirect to another page
- Using CSS media queries to make a responsive website

```js
const proudOfThisFunc = () => {
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
}
```

### Continued development

- Improve responsiveness of the design

## Author

- Linkedin - [Yodit](https://www.linkedin.com/in/yodit-abebe-ayalew/)
- Frontend Mentor - [@yodit93](https://www.frontendmentor.io/profile/yodit93)
- Twitter - [@yodtwit](https://twitter.com/yodtwit)

## Acknowledgments

- I would like to acknowledge the Frontend Mentor community for providing me with the opportunity to practice my coding skills.
