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