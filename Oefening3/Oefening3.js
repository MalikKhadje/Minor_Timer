let p = document.querySelector('p');
let start = document.getElementById('start');
let end = document.getElementById('end');
let reset = document.getElementById('reset');
let number = Number(p.innerHTML);
let timer;

function timerHandler() {
    number = number - 1;

    if (number == -1) {
        location.reload();
    }

    if (number < 5) {
        p.style.fontSize = "300px";
        p.style.color = "red";
        p.style.backgroundColor = "yellow";
    }

    if (number > 5) {
        p.removeAttribute('style')
    }

    p.innerHTML = number;
}
reset.onclick = function(){
    number = 11;
};



let checkerStart = 0;
let checkerEnd = 0;

(function () {
    timer = setInterval(timerHandler, 1000);
    checkerStart = 1;
    checkerEnd = 0;
})();

start.addEventListener('click', () => {
    if (checkerStart < 1) {
        timer = setInterval(timerHandler, 1000);
        checkerStart = 1;
        checkerEnd = 0;
        // progress.style.animation = 'progress'; 
        // hier werk je aan
    };
});
end.addEventListener('click', () => {
    if (checkerEnd < 1) {
        clearInterval(timer);
        checkerEnd = 1;
        checkerStart = 0;
    };
});
