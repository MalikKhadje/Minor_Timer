setInterval(function tijd() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();

    if (m < 10) {
        m = "0" + m;
    }

    if (h < 10) {
        h = "0" + h;
    }

    document.getElementById("kloktijd").innerHTML = h + ":" + m;
}, 1000);