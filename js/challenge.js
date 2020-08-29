document.addEventListener("DOMContentLoaded", () => {
    counter()
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const form = document.getElementById("comment-form")
    const count = document.getElementById("counter")
    let click = 0
    heart.addEventListener('click', handleHeart)

    minus.addEventListener('click', () => {
        count.innerHTML--
    })
    plus.addEventListener('click', () => {
        count.innerHTML++
    })
    pause.addEventListener('click', stopCount())


    function counter() {
        setInterval(function () { count.innerHTML++ }, 1000)
    }



    function stopCount() {


    }

    function handleHeart() {
      
        heart.addEventListener('click', () => {
            click = 0
            // debugger
        })

        const heartComment = document.querySelector("#list")
       
        heartComment.innerHTML += `
        <li>
        ${count.innerText}  has been liked ${click+=1}
        </li>
        `



    }


})


