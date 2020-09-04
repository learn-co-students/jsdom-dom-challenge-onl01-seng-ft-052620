
const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const form = document.getElementById("comment-form")

let likes = {}
plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
heart.addEventListener('click', like)
pause.addEventListener('click', pauseTimer)
form.addEventListener('submit', submit)

let number = setInterval(increment, 1000);

document.addEventListener("DOMContentLoaded", () => {
    // your code here


  });



function increment(){
 counter.innerText++
}

function decrement(){
  counter.innerText--
 }

 function like(e) {

const ul = document.getElementsByClassName("likes")[0]
const li = document.createElement("li")

if(likes[counter.innerText]) {
  likes[counter.innerText] += 1
}
else {
likes[counter.innerText] = 1 
}

li.innerHTML = `i liked ${counter.innerText} ${likes[counter.innerText]} times`
  
ul.appendChild(li)

 }


function pauseTimer(e) {
  clearInterval(number)
if(e.target.innerText === "pause") {
e.target.innerText = "resume"
} 
else if(e.target.innerText === "resume") {
  e.target.innerText = "pause"
  number = setInterval(increment, 1000)
}
 }

 function submit(e) {
e.preventDefault()
const div = document.getElementById("list")
const ul = document.createElement("ul")
const li = document.createElement("li")

let mystring = e.target[0].value
li.innerText = mystring 
ul.appendChild(li)
div.appendChild(ul)
 }
 
