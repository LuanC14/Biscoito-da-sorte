import { messages } from "./messages.js"

let buttonSort = document.querySelector('.buttonSort')
let sortScreen = document.querySelector('.sort')
let resultScreen = document.querySelector('.result')
let buttonTryAgain = document.querySelector('.buttonTryAgain')
let message = document.querySelector('.message')

let value 

buttonSort.addEventListener('click', () => {
    
    setTimeout(function result() {
        sortScreen.classList.add('hide')
        resultScreen.classList.remove('hide')
        message.classList.add('appear')
    }, 200)

    randomNumber()
    randomMessage(value)
})

buttonTryAgain.addEventListener('click', () => {
    sortScreen.classList.remove('hide')
    resultScreen.classList.add('hide')
})

function randomNumber() {
    value = Math.random() * 10
    value = Math.trunc(value)
}

function randomMessage(index) {
    message.textContent = messages[index]
}






