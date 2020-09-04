let counter = () => document.querySelector("#counter");
let pause = () => document.querySelector("#pause")
let plus = () => document.querySelector("#plus")
let minus = () => document.querySelector("#minus")
let heart = () => document.querySelector("#heart")
let likes = () => document.querySelector("ul.likes")

let timer = setInterval(function(){counter().innerHTML ++;}, 1000);

let incrementTimer = plus().addEventListener("click", function(){
    counter().innerHTML ++;
});

let decrementTimer = minus().addEventListener("click", function(){
    counter().innerHTML --;
});



