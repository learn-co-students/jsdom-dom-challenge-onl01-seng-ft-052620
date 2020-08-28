document.addEventListener("DOMContentLoaded", function(){
const heart = () => document.getElementById('heart')
const plus = () => document.getElementById('plus')
const minus = () => document.getElementById('minus')
const pause = () => document.getElementById('pause')
const likes = () => document.querySelector('.likes')
const comments = () => document.getElementById('list')
const counter = () => document.getElementById('counter')
let intervalId = null;

pause().addEventListener('click', function(){
    clearInterval(intervalId)
})

const submit = document.getElementById('submit')
submit.addEventListener('click', function(e){
    e.preventDefault();
    addComment();
})

plus().addEventListener('click', function(){
    counter().innerText++
    clearInterval(intervalId)
    intervalId = setInterval( () => counter().innerText++, 1000)
})
   
    

minus().addEventListener('click', function(){
    if (counter().innerText <= 0){
        clearInterval(intervalId) 
    } else {
    counter().innerText--
    clearInterval(intervalId)
    intervalId = setInterval( () => { 
        if (counter().innerText <= 0){
            clearInterval(intervalId) 
        } else {   
           counter().innerText--
        }
    }, 1000)
}
    
})
heart().addEventListener('click', function(){
    const like = document.createElement('LI')
    likes().appendChild(like)
    like.innerText = `You just liked ${counter().innerText} `
})
      


function addComment() {
    let commentInput = document.getElementById("comment-input").value;
    let comments = document.getElementById("list");
    let newComment = document.createElement('p')
    newComment.id = "new-com-id"
    newComment.innerText = commentInput;
    comments.appendChild(newComment)
    document.getElementById('comment-input').value = null;
}


}); 













