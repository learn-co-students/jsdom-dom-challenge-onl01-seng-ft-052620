let timer = document.getElementById("counter")
let plus  = document.getElementById("plus")
let minus  = document.getElementById("minus")
let heart  = document.getElementById("heart")
let pause  = document.getElementById("pause")
let likes = document.getElementsByClassName("likes")[0]
let list = document.getElementById("list")
let ul = document.createElement('ul')
list = list.appendChild(ul)
let paused = false
let num = 0

let timerFunc = setInterval(incrementCounter, 1000)

function incrementCounter(){
    num+=1; timer.innerText = num;
}

  window.addEventListener('load', function() {
    timerFunc
})

// let timerFunc = function timerFunction() {
//     setInterval(function(){ num+=1; timer.innerText = num;  }, 1000);
//   }



plus.addEventListener('click', function(){
        
        num+=1
        timer.innerText = num;
    })

minus.addEventListener('click', function(){
    
        num-=1
        timer.innerText = num;
    })

heart.addEventListener('click', function(){
    
        add_likes()
    })

function myStopFunction() {
        clearInterval(timerFunc);
      }

pause.addEventListener('click', function(){
    const button = document.querySelectorAll('button')
        paused === false ? paused = true : paused = false
        if (paused === true){
            pause.innerText= "resume"
            myStopFunction()
            for (let i=0; i<button.length; i++){
            button[i].disabled = true
            }
            pause.disabled = false
        }
        else if (paused === false) {
            pause.innerText= "pause"
            let timerFunc = setInterval(incrementCounter, 1000)
            timerFunc
            for (let i=0; i<button.length; i++){
                button[i].disabled = false
                }
        }
    })

function add_likes(){

    if (document.getElementById(num)) {
        let likesNumber = document.getElementById(num).innerText.split(" ")[4]
        likesNumber = parseInt(likesNumber)
        document.getElementById(num).innerText = `${num} has been liked ${likesNumber+=1} times`
    }
    else {
let num_of_likes = 1
let listItem= document.createElement("li")
listItem.id = num;
listItem.innerText = `${num} has been liked ${num_of_likes} times`
likes.appendChild(listItem)
    }

}

let submitForm = document.getElementById('submit')

submitForm.addEventListener("click", function(event) {
  let content = document.getElementById("comment-input")
  let text = content.value
    if (text !== ""){
      let listItem = document.createElement("li")
      let listText = document.createTextNode(`${text}`)
      listItem.appendChild(listText)
      list.appendChild(listItem)
      content.value = ""
    }


  event.preventDefault();
  
}, false);
