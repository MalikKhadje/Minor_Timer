// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
var countDownTime = new Date().getTime();
// Verander de timer naar 6 min:

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}


// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var hours = (hours.toLocaleString(undefined, { minimumIntegerDigits: 2 }));

    var minutes = (minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 }));

    var seconds = (seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 }));

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days + " Dagen <br>" + hours + " Uur <br>"
        + minutes + " Minuten <br>" + seconds + " Seconden";

    // If the count down is over, write some text 
    if(distance < 5){
        document.getElementById("timer").style.transform = "scale(2.1)";
    }
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Gelukkig Nieuwjaar!";
    }
    
}, 1000);