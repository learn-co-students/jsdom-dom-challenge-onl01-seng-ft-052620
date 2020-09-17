
document.addEventListener("DOMContentLoaded", startCounter)
const getCounter = () => document.getElementById('counter')
const getPause = () => document.querySelector('button#pause')
const getMinus = () => document.querySelector('button#minus')
const getPlus = () => document.querySelector('button#Plus')
const getHeart = () => document.querySelector('button#heart')
// const counterInterval = () => setInterval(addOneToCount, 1000)
let counterInterval

function startCounter() {
  counterInterval = setInterval(addOneToCount, 1000)
}
let count = 0
likeFinders = []
let likeValue = 0
function addOneToCount(){
    count++
    if (likeFinders.length-1 <= count) {
        likeFinder = { counter: count, likes: likeValue }; 
        likeFinders.push(likeFinder)
    }
    showLikes(count)
    
    getCounter().innerHTML = count
}

function subtractOneFromCount(){
count--
getCounter().innerHTML = count
}
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
document.getElementById('plus').onclick = addOneToCount;

document.getElementById('minus').onclick = subtractOneFromCount;

// As a user, I can 'like' an individual number of the counter. I should see count of the number 
//of 'likes' associated with that number.
document.getElementById('heart').onclick = addLikesToCount;
function showLikes(count){
    if (likeFinders[count-1].likes == 0) {
        removeLikesCount()
    }else {
        addLikeInfoToBrowser()
    }
}
function addLikesToCount(){
    // if (likeFinders[count-1].likes > 0){
        //     addLikeInfoToBrowser()
        // }
        likeFinders[count-1].likes = likeFinders[count-1].likes + 1
    }
    function addLikeInfoToBrowser() {
        const newLi = document.createElement('li')
        const likesCounter = document.createTextNode(`Count Likes = ${likeFinders[count-1].likes}`)
        likeParent = document.querySelector('ul.likes')
        newLi.appendChild(likesCounter)
        likeParent.appendChild(newLi)  
    }
    
    function removeLikesCount() {
        const findUl = document.querySelector('ul.likes')
        const test = document.querySelector('li')
        if (test != null) {
            findUl.removeChild(test)
        }
    }
        // As a user, I can pause the counter, which 
        // * should pause the counter
        // * disable all buttons except the pause button
        // * the pause button should then show the text "resume."
        
        //     Q1: What should happen?
        //     fill out form and click submit / create blog, add to blog array, list on page (cause / effect)
        //   Q2: What is the cause?
        //     submit event
        //   Q3: When should we be able to do this?
        //     DOMContentLoaded
        
        // As a user, I should see the timer increment every second once the page has loaded.
        // create a function that adds a second to the counter
    document.getElementById('pause').onclick =  pauseAllOnPush;

function pauseAllOnPush () {
   if (getPause().textContent == " pause ") {
        disableButtons()
        clearInterval(counterInterval)
        getPause().textContent =  " resume "
    }

    if (getPause().textContent == " resume "){
        enableButtons()
        startCounter()
        getPause().textContent = " pause "
    }
}

    function disableButtons() {
        getMinus().disabled = true
        getPlus().disabled = true
        getHeart().disabled = true
    }

    function enableButtons() {
        getMinus().disabled = false
        getPlus().disabled = false
        getHeart().disabled = false
    }
