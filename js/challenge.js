document.addEventListener("DOMContentLoaded", function(){
const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const like = document.getElementById('heart');
const likes = document.getElementsByClassName('likes')[0];
const commentForm = document.getElementsByTagName('input')[0];
const comments = document.getElementById('list');
const submit = document.getElementById('submit');
let speedCounter = setInterval(plusCounter, 1000);
let gameRunning = true;
let i = 0;

    function plusCounter() {
        if (gameRunning === true){
            counter.innerHTML++
        }
    };
    plus.addEventListener("click", function() {
        counter.innerHTML++
    });
    minus.addEventListener("click", function() {
        counter.innerHTML--
    });
    like.addEventListener("click", function() {
        likes.innerHTML = `${i} likes`
        ++i
    });
    submit.addEventListener("click", function() {
        event.preventDefault();
        const newComment = document.createElement("p");
        let commentInfo = document.createTextNode(`${commentForm.value}`);
        newComment.appendChild(commentInfo);
        comments.appendChild(newComment);
        commentForm.value ='';
    });
    pause.addEventListener("click", function() {
        if (gameRunning === true){
            gameRunning = false
            pause.innerHTML = "resume";
            like.disabled = true;
            minus.disabled = true;
            plus.disabled = true;
            submit.disabled = true;
            commentForm.disabled = true;
        }
        else {
            gameRunning = true;
            pause.innerHTML = "pause";
            like.disabled = false;
            minus.disabled = false;
            plus.disabled = false;
            submit.disabled = false;
            commentForm.disabled = false;
        };
    });
});
