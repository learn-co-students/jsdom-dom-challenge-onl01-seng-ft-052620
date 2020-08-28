const counter = () => document.getElementById('counter')
const CurrentCounterInteger = () => parseInt(counter().innerText, 10)
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const ulLikes = document.querySelector('.likes')
const likesArray = []
let IntervalId = setInterval(IncrementCounterByOne, 1000)
const form = () => document.getElementById('comment-form')
const input = () => document.querySelector("input#comment-input")
const commentSection = () => document.querySelector('body > div > h3:nth-child(1)')

function AddLikedNumberToList () {
  let li = document.createElement('li')
  let likedNumber = likesArray.find(x => x.likedNumber === CurrentCounterInteger())
  
  if (likedNumber) {
    likedNumber.NumberOfTimesLiked += 1
    index = likesArray.indexOf(likedNumber)
    
    ulLikes.children[index].innerText = `${likedNumber.likedNumber} has been liked ${likedNumber.NumberOfTimesLiked}`
  } else {
    likedNumber = {'likedNumber' :CurrentCounterInteger(),'NumberOfTimesLiked': 1}
    likesArray.push(likedNumber)
    li.innerText = `${likedNumber.likedNumber} has been liked ${likedNumber.NumberOfTimesLiked}`
    ulLikes.appendChild(li)
  }
  
  
}

function IncrementCounterByOne () {
  let currentCount = CurrentCounterInteger()
  currentCount += 1
  counter().innerText = currentCount
  
}

function subtractOneSecondFromCounter() {
  let currentCount = CurrentCounterInteger()
  currentCount -= 1
  counter().innerText = currentCount
}
function createComment(e){
  e.preventDefault();
  const comment = input().value
  const li = document.createElement('li');
  li.innerText = comment;
  commentSection().appendChild(li)
  
}

document.addEventListener("DOMContentLoaded", () => {
  form().addEventListener('submit', createComment)
})


minusButton.addEventListener('click', () => {
 subtractOneSecondFromCounter()
})

plusButton.addEventListener('click', () => {
 IncrementCounterByOne()
})

heartButton.addEventListener('click', () => {
  AddLikedNumberToList()
})

pauseButton.addEventListener('click', () => {
  if (pauseButton.classList[0] === "resume"){
  
    counter().innerText = 0
    pauseButton.classList.remove("resume")
    pauseButton.innerText = "pause"
    IntervalId = setInterval(IncrementCounterByOne, 1000)
  
  } else {
  clearInterval(IntervalId)
  pauseButton.innerText = "resume"
  pauseButton.classList = "resume"
}})



