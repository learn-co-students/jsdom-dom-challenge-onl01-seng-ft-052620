const counter = () => document.getElementById('counter');
const minus = () => document.getElementById('minus');
const plus = () => document.getElementById('plus');

const heart = () => document.getElementById('heart')
const likeList = () => document.querySelector('ul')
const pause = () => document.getElementById('pause');
const start = new Date().getTime()

const commentList = () => document.getElementById('list')
const commentForm = () => document.getElementById('comment-form')
const commentInput = () => document.getElementById('comment-input')
const submit = () => document.getElementById('submit')

submit().addEventListener('click', function(e){
    e.preventDefault()
    let li = document.createElement('p')
    li.innerHTML = commentInput().value
    if (li.innerHTML !== ''){
        commentList().prepend(li)
    }
    commentInput().value = ""

})

var intervalID = setInterval(setTime, 1000)

function setTime(){
    counter().innerHTML = parseInt(counter().innerHTML, 10) + 1
}

function addTime(){
    counter().innerHTML = parseInt(counter().innerHTML, 10) + 1
}

function subTime(){
    counter().innerHTML = parseInt(counter().innerHTML, 10) - 1
}
var amount = 0
function clickHeart(){
    let time = counter().innerHTML
    let li = document.getElementById(`${time}-liked` ) || document.createElement('li')
    if (li.id !== `${time}-liked`){
        amount = 0
    }
    li.remove()
    likeList().append(li)
    li.id = `${time}-liked`
    amount += 1
    li.innerHTML = `${time} has been liked ${amount} time`

}

pause().addEventListener('click', function(){
    if (pause().innerText === 'pause'){
        clearInterval(intervalID)
        pause().innerText = "resume"
        heart().disabled = true;
        plus().disabled = true;
        minus().disabled = true;
        submit().disabled = true;

    }else{
        pause().innerText = "pause"
        intervalID = setInterval(setTime, 1000)
        heart().disabled = false;
        plus().disabled = false;
        minus().disabled = false;
        submit().disabled = false;
    }
})

heart().addEventListener('click', clickHeart)
plus().addEventListener('click', addTime)
minus().addEventListener('click', subTime)
document.addEventListener('DOMContentLoaded', (event) => {
    

});


