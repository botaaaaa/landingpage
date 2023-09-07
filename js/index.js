let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");
let forward1 = document.getElementById("forward1");
let forward2 = document.getElementById("forward2");
let forward3 = document.getElementById("forward3");
let toggle = document.querySelector(".toggle");
let drop = document.querySelector(".dropdown");


toggle.onclick = function () {
    drop.classList.toggle('open');
}


forward1.addEventListener('click', function () {
    box1.classList.add("hide");
    box2.classList.remove("hide");

})

forward2.addEventListener('click', function () {
    box2.classList.add("hide");
    box3.classList.remove("hide");
})

forward3.addEventListener('click', function () {
    box3.classList.add("hide");
    box1.classList.remove("hide");

})


back1.addEventListener('click', function () {
    box3.classList.remove("hide");
    box1.classList.add("hide");
})
back2.addEventListener('click', function () {
    box1.classList.remove("hide");
    box2.classList.add("hide");
})


back3.addEventListener('click', function () {
    box2.classList.remove("hide");
    box3.classList.add("hide");
})


let displays = document.querySelectorAll(".num");
let section = document.getElementsByClassName(".section");
let interval = 5000;


window.onscroll = function () {
    if (window.scrollY >= 1800 && window.scrollY <= 2000) {
        displays.forEach((display) => {
            let startValue = 0;
            let endValue = parseInt(display.getAttribute("data-value"));
            let time = Math.floor(interval / endValue);
            let counter = setInterval(function () {

                startValue += 1;
                display.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            },
                time);
        });
    }
}





















