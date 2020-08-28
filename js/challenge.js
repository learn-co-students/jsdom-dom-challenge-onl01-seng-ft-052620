const counter = () => document.getElementById('counter')
const CurrentCounterInteger = () => parseInt(counter().innerText, 10)
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const ulLikes = document.querySelector('.likes')
const likesArray = []

function AddLikedNumberToList () {
  let li = document.createElement('li')
  let likedNumber = likesArray.find(x => x.likedNumber === CurrentCounterInteger())
  
  if (likedNumber) {
    likedNumber.NumberOfTimesLiked += 1
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
document.addEventListener("DOMContentLoaded", () => {
  setInterval(IncrementCounterByOne, 1000)
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

