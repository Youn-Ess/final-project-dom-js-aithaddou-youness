
let links = document.querySelectorAll(`.button-link`)
const breakfast = document.querySelector(`.breakfast`)
const lunch = document.querySelector(`.lunch`)
const diner = document.querySelector(`.diner`)


links.forEach(link => {
    link.addEventListener(`click`, (e) => {
        if (e.target.textContent == `Breakfast`) {
            breakfast.classList.remove(`d-none`)
            lunch.classList.add(`d-none`)
            diner.classList.add(`d-none`)
        } else if (e.target.textContent == `Lunch`) {
            console.log(e.target.textContent)
            breakfast.classList.add(`d-none`)
            lunch.classList.remove(`d-none`)
            diner.classList.add(`d-none`)
        } else if (e.target.textContent == `Diner`) {
            breakfast.classList.add(`d-none`)
            lunch.classList.add(`d-none`)
            diner.classList.remove(`d-none`)
        }
    })
});



let signUpPage = document.querySelector(`.signup-page`)
let logInPage = document.querySelector(`.login-page`)


let signUpLogInButtons = document.querySelectorAll(`.header-modal .buttons`)
console.log(signUpLogInButtons)
signUpLogInButtons.forEach(Button => {
    Button.addEventListener(`click`, (e) => {
        if (e.target.textContent == `sign up`) {
            signUpPage.classList.remove(`d-none`)
            logInPage.classList.add(`d-none`)
        } else if (e.target.textContent == `login`) {
            signUpPage.classList.add(`d-none`)
            logInPage.classList.remove(`d-none`)
        }
    })
});

