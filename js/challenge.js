document.addEventListener("DOMContentLoaded", callOnLoad)

const counter = () => document.getElementById("counter");
let seconds = 0



function callOnLoad() {
    let interval = setInterval(incrementSeconds, 1000);
}

function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds; 

}
