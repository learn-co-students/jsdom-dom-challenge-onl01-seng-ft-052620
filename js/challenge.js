var counterInterval = 0

document.addEventListener("DOMContentLoaded", function() {

    counterInterval = window.setInterval(count, 1000)

    //Increment and Decrement buttons
    document.getElementById("minus").addEventListener("click", function(e){
        count(-1)
        e.preventDefault
    })

    document.getElementById("plus").addEventListener("click", function(e){
        count(1)
        e.preventDefault
    })

    //Pause
    document.getElementById("pause").addEventListener("click", function(e) {
        let pauseButton = document.getElementById("pause")
        
        if (pauseButton.innerHTML === "resume"){
            resume()
        } else {
            pause()
        }

        e.preventDefault
    })

    //Likes
    document.getElementById("heart").addEventListener("click",function(e) {
        let likes = document.querySelector(".likes")

        // Get the number of the counter
        let count = parseInt(document.getElementById("counter").innerHTML)

        // Check to see if there is an li with that number already
        if (likes.querySelector(`#like-${count}`)) {
            let likeItem = likes.querySelector(`#like-${count} span`)

            likeItem.innerHTML = parseInt(likeItem.innerHTML) + 1
        } else {
            let likeItem = document.createElement('li')
            likeItem.id = `like-${count}`

            likeItem.innerHTML = `${count} has been liked ` + "<span>1</span>" + " times!"

            likes.append(likeItem)
        }
        
        e.preventDefault
    })

    //Comments
    document.getElementById("comment-form").addEventListener("submit", function(event) {
        

        console.log("hit")
        //retrieve input
        let commentInput  = document.getElementById("comment-input")

        // add <p> to div
        let commentItem = document.createElement('p')
        commentItem.innerHTML = commentInput.value

        document.getElementById("list").appendChild(commentItem)

        //clear input
        commentInput.value = ""

        event.preventDefault
    })
    
})

function count(val=1) {
    let counter = document.getElementById("counter")

    counter.innerHTML = parseInt(counter.innerHTML) + val
}

function pause() {
    window.clearInterval(counterInterval)

    document.getElementById("minus").disabled = true
    document.getElementById("plus").disabled = true
    document.getElementById("heart").disabled = true

    document.getElementById("pause").innerHTML = "resume"
}

function resume() {
    counterInterval = window.setInterval(count, 1000)

    document.getElementById("minus").disabled = false
    document.getElementById("plus").disabled = false
    document.getElementById("heart").disabled = false

    document.getElementById("pause").innerHTML = "pause"
}