document.addEventListener('DOMContentLoaded', () => {
  const startTimer = () => window.setInterval(incrementCounter, 1000);
  let timer = startTimer();
  const change_counter = document.getElementById('change_counter');
  const counter = document.getElementById('counter');
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const like = document.getElementById('heart');
  const like_counts = [];
  const submit = document.getElementById('submit');

  function changeButtonsAbility(){
    minus.disabled = !minus.disabled;      
    plus.disabled = !plus.disabled;    
    like.disabled = !like.disabled;
    submit.disabled = !submit.disabled;    
  }
  
  function stopCounter(){
    window.clearInterval(timer);
    change_counter.textContent = "resume";
    changeButtonsAbility();
  }

  function resumeCounter(){
    timer = startTimer();
    change_counter.textContent = "pause";
    changeButtonsAbility();
  }

  function incrementCounter(){
    counter.textContent = parseInt(counter.textContent, 10) + 1;
  }

  function decrementCounter(){
    counter.textContent = parseInt(counter.textContent, 10) - 1;
  }

  function addLike(){
    likes_list = document.querySelector('.likes');
    let num = parseInt(counter.textContent, 10);
    if (like_counts[num]){
      like_counts[num] += 1;
      const listItem = document.getElementById(`like-${num}`);
      addListItem(listItem);
    } else {
      like_counts[num] = 1;
      const listItem = document.createElement('li');
      listItem.id = `like-${num}`;
      addListItem(listItem);
    }

    function addListItem(listItem){
      listItem.textContent = `${num} has been liked ${like_counts[num]} times`;
      likes_list.appendChild(listItem);
    }
  }

  function addComment(){
    const comments_list = document.getElementById('list');
    const comment = document.getElementById('comment-input');
    comments_list.innerHTML += `
      <p>${comment.value}</p>
    `;
    comment.value = null;
  }

  plus.addEventListener('click', incrementCounter);
  minus.addEventListener('click', decrementCounter);
  like.addEventListener('click', addLike);

  change_counter.addEventListener('click', ()=> {
    switch(change_counter.textContent){
      case "pause": 
        stopCounter();
        break;
      case "resume":
        resumeCounter();
        break;
    }
  });

  submit.addEventListener('click', (e)=>{
    addComment();
    e.preventDefault();
  });

});



