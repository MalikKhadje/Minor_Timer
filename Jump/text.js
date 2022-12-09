setInterval(function tijd(){
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();

document.getElementById("kloktijd").innerHTML = h + ":" + m;
}, 1000);