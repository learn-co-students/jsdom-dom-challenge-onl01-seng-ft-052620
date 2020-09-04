let counter = () => document.querySelector("#counter");
let pause = () => document.querySelector("#pause")
let plus = () => document.querySelector("#plus")
let minus = () => document.querySelector("#minus")
let heart = () => document.querySelector("#heart")
let likes = () => document.querySelector("ul.likes")
let submit = () => document.querySelector("#submit")
let commentList = () => document.querySelector("#list")

let timeOn = true

let timer = setInterval(function(){counter().innerHTML ++;}, 1000);

let incrementTimer = plus().addEventListener("click", function(){
    counter().innerHTML ++;
});

let decrementTimer = minus().addEventListener("click", function(){
    counter().innerHTML --;
});

let stopIt = function pauseTimer(){
    clearInterval(timer)
}

pause().addEventListener("click", function(){
    stopIt()
    plus().disabled = true
    minus().disabled = true
    heart().disabled = true
    submit().disabled = true
});

heart().addEventListener("click", function(){
let li = document.createElement('li')
li.innerHTML = counter().innerText + " was liked and I have no clue yet how to set the how many times"
likes().appendChild(li)
});

submit().addEventListener("click", function(e){
    e.preventDefault()
    let textBox = document.querySelector("#comment-input")
    let comment = document.createElement('p')
    comment.innerHTML = textBox.value
    commentList().appendChild(comment)
    textBox.value = ""
})




