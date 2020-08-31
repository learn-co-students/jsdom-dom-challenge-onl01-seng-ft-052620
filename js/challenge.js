

document.addEventListener("DOMContentLoaded", function(){
    //declare variables
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const pause = document.getElementById('pause')
    const heart = document.getElementById('heart');
    const likes = document.querySelector('.likes');
    const comments = document.getElementById('list');
    const form = document.querySelector('form');
    var countID;
    //functions needed
    function getCurrentCount(){
        return parseInt(counter.innerText);
    }
    function incrementCounter(){
        counter.innerText = `${getCurrentCount() + 1}`;
    }
    function decrementCounter(){
        const current = parseInt(counter.innerText);
        counter.innerText = `${getCurrentCount() - 1}`;
    }
    function startCounter(){
        countID = window.setInterval(incrementCounter, 1000);
    }
    function pauseCounter(){
        clearInterval(countID)
    }
    function pauseOrStart(){
        if(pause.innerText === 'pause'){
            pauseCounter();
            pause.innerText = 'resume';
        }
        else {
            startCounter();
            pause.innerText = 'pause';
        }
    }
    function addLike(){
        let li = document.querySelector(`[data-num='${getCurrentCount()}']`);
        if(li != null){
            li = document.querySelector(`[data-num='${getCurrentCount()}']`);
            let times = parseInt(li.dataset.times);
            li.dataset.times = `${times + 1}`;
            li.textContent = `${li.dataset.num} has been liked ${li.dataset.times} times.`;
        }
        else{
            let newLike = document.createElement('li');
            newLike.dataset.num = `${getCurrentCount()}`;
            newLike.dataset.times = '1';
            newLike.innerText = `${getCurrentCount()} has been liked 1 time.`;
            likes.appendChild(newLike);
        }
    }
    function addComment(){
      
    }
    
    //start counter and add event listeners
    startCounter();
    plus.addEventListener("click", incrementCounter);
    minus.addEventListener('click', decrementCounter);
    pause.addEventListener('click', pauseOrStart);
    heart.addEventListener('click', addLike);
    form.onsubmit = function(e){
        const comment = document.getElementById('comment-input');
        e.preventDefault();
        let li = document.createElement('li');
        li.textContent = comment.value;
        list.appendChild(li);
        comment.value = '';
      }



} )