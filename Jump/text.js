// ******************************************** KLOK

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

// ******************************************** TIMER 1

let timeInSecs;
let ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
}

function tick() {
    let secs = timeInSecs;

    if (secs > 0) {
        timeInSecs--;
    }

    else {
        clearInterval(ticker);
        startTimer(60 * 60);
    }

    let mins = Math.floor(secs / 60);
    secs %= 60;
    let pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

    document.getElementById("countdown2").innerHTML = pretty;
}

startTimer(60 * 60);

// ******************************************** TIMER 2

let timeInSecs2;
let ticker2;

function startTimer(secs2) {
    timeInSecs2 = parseInt(secs2);
    ticker2 = setInterval("tick2()", 1000);
}

function tick2() {
    let secs2 = timeInSecs2;

    if (secs2 > 0) {
        timeInSecs2--;
    }

    else {
        clearInterval(ticker2);
        startTimer(30 * 60);
    }

    let mins2 = Math.floor(secs2 / 60);
    secs2 %= 60;
    let pretty2 = ((mins2 < 10) ? "0" : "") + mins2 + ":" + ((secs2 < 10) ? "0" : "") + secs2;

    document.getElementById("countdown3").innerHTML = pretty2;
    document.getElementById("countdown").innerHTML = pretty2;
}

startTimer(30 * 60);

// ******************************************** ...

// ******************************************** ...

// ******************************************** KLEUREN

var generateRandom = function (length) {
    return Math.floor((Math.random() * length));
}

const kleuren = [
    "#F6E58D",
    "#ffbe76",
    "#ff7979",
    "#badc58",
    "#f9ca24",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#22a6b3",
    "#be2edd",
    "#4834d4",
    "#130f40"
];

var teams = [
    "#F6E58D",
    "#ffbe76",
    "#ff7979",
    "#badc58",
    "#f9ca24",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#22a6b3",
    "#be2edd",
    "#4834d4",
    "#130f40"
]

// zie welke kleur er nu is

var i = 0;
let timenow3 = 0;

function change() {

    let now2 = Date.now();
    now2 /= 1000;
    now2 /= 60;
    now2 %= 60;
    now2 *= 2;

    now2 = Math.floor(now2);

    if (timenow3 != now2) {
        var doc = document.getElementById("card3");
        var color = [
            "#F6E58D",
            "#ffbe76",
            "#ff7979",
            "#badc58",
            "#f9ca24",
            "#f0932b",
            "#eb4d4b",
            "#6ab04c",
            "#22a6b3",
            "#be2edd",
            "#4834d4",
            "#130f40"];

        doc.style.backgroundColor = color[i];
        i = (i + 1) % color.length;
        timenow3 = now2;

        console.log(now2);
    }
}

setInterval(change, 100);

// x = 1 zodat je kan zien welke kleur er na 30 minuten is

var x = 1;
let timenow2 = 0;

function change2() {
    let now = Date.now();
    now /= 1000;
    now /= 60;
    now %= 60;
    now *= 2;

    now = Math.floor(now);
    if (timenow2 != now) {
        var doc2 = document.getElementById("card");
        var color2 = [
            "#F6E58D",
            "#ffbe76",
            "#ff7979",
            "#badc58",
            "#f9ca24",
            "#f0932b",
            "#eb4d4b",
            "#6ab04c",
            "#22a6b3",
            "#be2edd",
            "#4834d4",
            "#130f40"];

        doc2.style.backgroundColor = color2[x];
        x = (x + 1) % color2.length;
        timenow2 = now;

        console.log(now);

    }
}

// 1000 = ms * 61 = seconden * 30 = minuten (De 61 seconden is zodat de timer goed blijft lopen...)
// elke 30 minuten van kleur veranderen = 1000 * 61 * 30

setInterval(change2, 100);