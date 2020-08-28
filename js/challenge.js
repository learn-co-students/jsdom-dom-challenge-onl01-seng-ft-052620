document.addEventListener("DOMContentLoaded", () => {

    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');
    let counter = document.getElementById('counter')
    let counterNumber = parseInt(document.getElementById('counter').innerText);
   
    setInterval(
    () => {
        counterNumber = counterNumber + 1
        counter.innerHTML = counterNumber.toString()
    },
    1000
    );
    
    plus.addEventListener('click', function(event) {
        counterNumber = counterNumber + 1
        counter.innerHTML = counterNumber.toString();
       });
      
    minus.addEventListener('click', function(event) {
        counterNumber = counterNumber - 1
        counter.innerHTML = counterNumber.toString();
       });

    pause.addEventListener('click', function(event) {

    });

  });