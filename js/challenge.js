document.addEventListener("DOMContentLoaded", callOnLoad)

const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const likes = document.querySelector('.likes')
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");


let interval = setInterval(incrementSeconds, 1000);
function callOnLoad() {
    addMinus();
    addPlus();
    addLikes();
    addPause();
    submitComment();
}

let seconds = 0;
function incrementSeconds() {
    seconds ++ ;
    counter.innerText = seconds;
}

function addMinus() {
    minus.addEventListener("click", function() {
        seconds -- ;
        counter.innerText = seconds;
    });
};

function addPlus() {
    plus.addEventListener("click", function() {
        seconds ++ ;
        counter.innerText = seconds;
    });
}

function addLikes() {
    heart.addEventListener("click", function() {
        if (document.getElementById(seconds)) {
            let likesNumber = document.getElementById(seconds).innerText.split(" ")[4]
            likesNumber = parseInt(likesNumber)
            document.getElementById(seconds).innerText = `${seconds} has been liked ${likesNumber+=1} times`
        } else {
            let number_of_likes = 1
            let li = document.createElement("li");
            li.id = seconds;
            li.innerText = `${seconds} has been liked ${number_of_likes} times`
            likes.appendChild(li)
        };
    });
};

function addPause() {
    pause.addEventListener("click", function() {
        if(pause.innerText == "pause") {
            clearInterval(interval)
            pause.innerText = "resume"
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            console.log(pause.innerText)
        } else {
            setInterval(incrementSeconds, 1000)
            pause.innerText = "pause"
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false
        }
    })
}

function submitComment() {
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        let comment = document.querySelector('input#comment-input').value
        let commentsList = document.querySelector('.comments')
        let p = document.createElement("p")
        let text = document.createTextNode(comment)
        p.appendChild(text);
        commentsList.appendChild(p);
        comment = ''
    })
}