
document.addEventListener("DOMContentLoaded", () => {
  
  const startTimer = () => window.setInterval(incrementCounter, 1000);
  let timer = startTimer();
  const counter = document.getElementById('counter');
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const like = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const submit = document.getElementById('submit');
  let like_counts = [];
  
  plus.addEventListener('click', incrementCounter);
  minus.addEventListener('click', decrementCounter);
  like.addEventListener('click', addLike);
  pause.addEventListener('click', pauseOrResumeIncrementing);
  submit.addEventListener('click', (e)=>{
    leaveComment();
    e.preventDefault();
  });
  
  function leaveComment(){
    const list_of_comments = document.getElementById('list')
    const comment_input = document.getElementById('comment-input')
    const p = document.createElement('p')
    p.innerText = comment_input.value;
    list_of_comments.appendChild(p);
  }

  function pauseOrResumeIncrementing () {
    /*
    Effect is incrementing of counter pauses or resumes
    Event is a click on the pause button
    Can cause the pause button to change from "pause" to "resume" whenever clicked
    and render other buttons disabled
    */
    function disableButtons() {
      minus.disabled = !minus.disabled;      
      plus.disabled = !plus.disabled;    
      like.disabled = !like.disabled;
      submit.disabled = !submit.disabled;
    }

    function pauseIncrementing () {
      window.clearInterval(timer);
      pause.textContent = "resume";
      disableButtons();
    }

    function resumeIncrementing () {
      timer = startTimer();
      pause.textContent = "pause";
      disableButtons();
    }

  switch(pause.innerText){
      case "pause":
        pauseIncrementing();
        break;
      case "resume":
        resumeIncrementing();
        break;
    }
  }
  
  function addLike() {
    let current_number = parseInt(counter.textContent, 10)
    like_counts.push(current_number);
    if (like_counts[current_number]){
      like_counts[current_number] += 1;
      const li = document.getElementById(`like-${current_number}`);
      addToLikesList(li);
    } else {
      like_counts[current_number] = 1;
      const li = document.createElement('li');
      li.id = `like-${current_number}`;
      
      addToLikesList(li);
    }
    
    function addToLikesList (li) {
      let ul = document.querySelector('.likes');
      li.textContent = `${current_number} has been liked ${like_counts[current_number]} times`;
      ul.appendChild(li);
    }
  }

  function incrementCounter() {
    counter.textContent = parseInt(counter.textContent, 10) + 1;
  }
    
  function decrementCounter() {
    counter.textContent = parseInt(counter.textContent, 10) - 1;
  }
  
});


