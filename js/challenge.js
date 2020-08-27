document.addEventListener("DOMContentLoaded", function(){
const heart = () => document.getElementById('heart')
const plus = () => document.getElementById('plus')
const minus = () => document.getElementById('minus')
const pause = () => document.getElementById('pause')
const likes = () => document.querySelector('.likes')
const comments = () => document.getElementById('list')
const counter = () => document.getElementById('counter')


const submit = document.getElementById('submit')
submit.addEventListener('click', function(e){
    e.preventDefault();
    addComment();
})

plus().addEventListener('click', function(){
    counter().innerText++
})
minus().addEventListener('click', function(){
    if (counter().innerText == 0){
        minus().disabled
    } else {
    counter().innerText--
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













