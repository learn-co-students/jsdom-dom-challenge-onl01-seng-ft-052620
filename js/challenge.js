let has_been_liked = []
let toggle = 2
document.addEventListener("DOMContentLoaded", function() {

  myTimer = setInterval(increment, 1000)

  function increment(){
    let counter = Number(document.getElementById('counter').innerText)
    counter += 1
    document.getElementById('counter').innerText = counter.toString();

  }


let click_on_plus = document.getElementById('plus').addEventListener("click", function(event){

  let counter = Number(document.getElementById('counter').innerText)
  counter += 1
  document.getElementById('counter').innerText = counter.toString();

  event.preventDefault();

  })

let click_on_minus = document.getElementById('minus').addEventListener("click", function(event){

  let counter = Number(document.getElementById('counter').innerText)
  counter -= 1
  document.getElementById('counter').innerText = counter.toString();
  event.preventDefault();

  })

let click_on_heart = document.getElementById('heart').addEventListener("click", function(event){
  let current_number = document.getElementById('counter').innerText
  let ul = document.querySelector("ul")
  ul.id = "ul"
  has_been_liked.push(current_number)
  if (check_number_of_likes() < 2){
    let li = document.createElement('li')
    li.id = `li ${current_number}`
    li.innerText = `${current_number} has ${check_number_of_likes()} like`
    ul.appendChild(li)
  }else{
    let li = document.getElementById(`li ${current_number}`)
    li.innerText = `${current_number} has ${check_number_of_likes()} likes`
  }

function check_number_of_likes(){
    let number_of_likes = 0
    for(let i = 0; i < has_been_liked.length; i++){
      if (has_been_liked[i] === current_number){
      number_of_likes += 1
      }
    }
    return number_of_likes
  }

  event.preventDefault();
  })

let click_on_pause = document.getElementById('pause').addEventListener("click", function(event){
  clearInterval(myTimer);
  if (toggle % 2 == 0){
  for (let i = 0; i < document.querySelectorAll("BUTTON").length; i++) {
    if (document.querySelectorAll("BUTTON")[i].id != 'pause'){
      document.querySelectorAll("BUTTON")[i].disabled = true
    } else {
      document.querySelectorAll("BUTTON")[i].innerText = "resume"
      }
    }
    toggle += 1
  }else {
    for (let i = 0; i < document.querySelectorAll("BUTTON").length; i++) {
      document.querySelectorAll('BUTTON')[i].disabled = false;
      if (document.querySelectorAll('BUTTON')[i].id == "pause"){
        document.querySelectorAll("BUTTON")[i].innerText = "pause"
        document.getElementById('counter').innerText = "0"
        myTimer = setInterval(increment, 1000)
      }
      toggle += 1
    }
  }
  })
});

let click_on_comment_submit = document.getElementById("submit").addEventListener("click", function(event){
  let comment = document.getElementById("comment-input")
  let comment_area = document.getElementById('list')
  new_comment = document.createElement("p")
  new_comment.textContent = comment
  new_comment.textContent = comment.value
  comment_area.appendChild(new_comment)
  event.preventDefault();
})
