// ALL THE NODES////////////////////////////////////////////
let counter = () => document.querySelector("#counter");
let pause = () => document.querySelector("#pause")
let plus = () => document.querySelector("#plus")
let minus = () => document.querySelector("#minus")
let heart = () => document.querySelector("#heart")
let likes = () => document.querySelector("ul.likes")
let submit = () => document.querySelector("#submit")
let commentList = () => document.querySelector("#list")

// THE PLUS MINUS BUTTONS /////////////////////////////////////////
let incrementTimer = plus().addEventListener("click", function(){
    counter().innerHTML ++;
});

let decrementTimer = minus().addEventListener("click", function(){
    counter().innerHTML --;
});

// THIS IS NOT AS USEFUL AS I HOPED IT WOULD BE :D ////////////
function toggleButtons(){
    plus().disabled = true ? plus().disabled = false : plus().disabled = true
    minus().disabled = true ? minus().disabled = false : minus().disabled = true
    heart().disabled = true ? heart().disabled = false : heart().disabled = true
    submit().disabled = true ? submit().disabled = false : submit().disabled = minus
}

//WHERE THE FUN PART BEGINS //////////////////////////////////////////
let timer = setInterval(function(){counter().innerHTML ++;}, 1000);
let on = true

function pauseTimer(){
    clearInterval(timer)
    plus().disabled = true
    minus().disabled = true
    heart().disabled = true
    submit().disabled = true
    on = false
}

pause().addEventListener("click", function(){
    if (on){
        pauseTimer()
    } else {
        clearInterval(timer)
        timer = setInterval(function(){counter().innerHTML ++;}, 1000);
        on = true
        toggleButtons()
    }
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




