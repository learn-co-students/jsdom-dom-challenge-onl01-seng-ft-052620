document.addEventListener("DOMContentLoaded", handleEvents); 

const counter = () => document.getElementById("counter");
const plus = () => document.getElementById("plus");
const minus = () => document.getElementById("minus");
const heart = () => document.getElementById("heart");
const pause = () => document.getElementById("pause");
const likes = () => document.querySelector("ul.likes");
const commentForm = () => document.getElementById("comment-form");
const commentInput = () => document.getElementById("comment-input");
const commentList = () => document.getElementById("list");
const sumbit = document.getElementById("submit");
let counters = window.setInterval(timer, 1000);


function handleEvents() {
    counters;
    plus().addEventListener("click", plusOne);
    minus().addEventListener("click", minusOne);
    heart().addEventListener('click', addLikes);
    commentForm().addEventListener('submit', addComment);
    paused();
}

let count = 0;
let newNum = true;
function timer() {
    count++;
    newNum = true;
    counter().textContent = count;
}

function pauseCount() {
    window.clearInterval(counters)
    pause().innerText = "resume";
    disable();
}

function resumeCount() {
    counters = window.setInterval(timer, 1000);
    pause().innerText = "pause";
    disable();
}

let paused = () => pause().addEventListener("click", () => {
    switch (pause().innerText) {
        case "pause":
            pauseCount();
            break;
        case "resume":
            resumeCount();
            break;
    }
});

function plusOne() {
    counter().textContent = count += 1;
}

function minusOne() {
    counter().textContent = count -= 1;
}

let num = 0;
function addLikes() {
        if (newNum) {
            num = 0;
        }
        num += 1;

        let oldLi;
        if (newNum) {
            oldLi = document.createElement('li');
            oldLi.setAttribute("id", `${count}`)
            oldLi.innerText = `${(counter().textContent)} has been liked ${num} times`
            
            likes().appendChild(oldLi);
            newNum = false;
        } else {
            oldLi = document.getElementById(`${count}`);
            
            let newLi = document.createElement('li');
            newLi.setAttribute("id", `${count}`);
            newLi.innerText = `${(counter().textContent)} has been liked ${num} times`
            
            likes().replaceChild(newLi, oldLi);
            oldLi = newLi
        }
        
}


function addComment(e) {
    const p = document.createElement("p");
    p.innerText = commentInput().value;

    commentList().appendChild(p);
    commentInput().value = "";
    e.preventDefault();
}

function disable() {
    minus().disabled = !minus().disabled;
    plus().disabled = !plus().disabled;
    heart().disabled = !heart().disabled;
    submit.disabled = !submit.disabled; 
}
