document.addEventListener("DOMContentLoaded", () => {
    counter()
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const pause = document.getElementById("pause")
    const form = document.getElementById("comment-form")
    const count = document.getElementById("counter")
    const like = document.getElementById('heart');
    const like_counts = [];
    heart.addEventListener('click', addLike)

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
    function addLike() {
        likes_list = document.querySelector('.likes');
        let num = parseInt(counter.textContent, 10);
        if (like_counts[num]) {
            like_counts[num] += 1;
            const listItem = document.getElementById(`like-${num}`);
            addListItem(listItem);
        } else {
            like_counts[num] = 1;
            const listItem = document.createElement('li');
            listItem.id = `like-${num}`;
            addListItem(listItem);
        }
    }

})



