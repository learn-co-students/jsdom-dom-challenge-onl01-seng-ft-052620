const counter = () => document.querySelector('h1#counter')
const plus = document.querySelector('button#plus')
const minus = document.querySelector('button#minus')
const heart = document.querySelector('button#heart')
const pause = document.querySelector('button#pause')
const submit = document.querySelector('button#submit')
const comment = () => document.querySelector('input#comment-input')
const list = document.getElementById('list')
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const likedNumbers = []
let newNumber = null
let isPaused = false

document.addEventListener("DOMContentLoaded", () => {
    setInterval( () => {
        if (!isPaused) {
            increment()
        }
    } , 1000 ) 
    plus.addEventListener('click', increment )
    minus.addEventListener('click', decrement )
    heart.addEventListener('click', likeNumber )
    pause.addEventListener('click', pauseAllEvents )
    form.addEventListener('submit', logComment )
})

let i = parseInt(counter().innerText, 10)
const increment = () => counter().innerText = ++i
const decrement = () => counter().innerText = --i

function logComment(e) {
    e.preventDefault()
    let li = document.createElement('li')
    li.innerText = comment().value
    list.appendChild(li)
    comment().value = ""
}

function pauseAllEvents() {
    if (pause.innerText === "pause") {
    isPaused = true
    plus.disabled = true
    minus.disabled = true
    heart.disabled = true
    submit.disabled = true
    pause.innerText = "resume"
} else {
    isPaused = false
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    submit.disabled = false
    pause.innerText = "pause"
    }
}

function likeNumber() {
    if (newNumber = likedNumbers.find(like => like.number === i )) {
        newNumber.times++
    } else {
        newNumber = {number: i, times: 1}
        likedNumbers.push(newNumber)
    }
    clearLikes();
    likedNumbers.forEach((like) => displayLike(like));
}

function clearLikes() {
    ul.innerHTML = ""
}

function displayLike(like) {
    let li = document.createElement('li')
    if ( like.times === 1 ) {
        li.innerText = `${like.number} has been liked 1 time`
    } else {
        li.innerText = `${like.number} has been liked ${like.times} times`
    }
    ul.appendChild(li)
}