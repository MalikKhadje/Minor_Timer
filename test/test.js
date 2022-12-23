// Haal de elementen op die we later willen gebruiken
const clock = document.getElementById('clock');
const colorText = document.getElementById('color-text');
const colorBox = document.getElementById('color-box');
const roundList = document.getElementById('round-list');

// Stel een timer in om iedere seconde de tijd te updaten
setInterval(updateTime, 1000);

// Stel de kleuren en tijdstippen in voor de volgende springrondes
const rounds = [
    { color: 'red', time: '12:00' },
    { color: 'orange', time: '12:30' },
    { color: 'yellow', time: '13:00' },
    { color: 'green', time: '13:30' },
    { color: 'blue', time: '14:00' },
    { color: 'purple', time: '14:30' },
    { color: 'pink', time: '15:00' },
    { color: 'brown', time: '15:30' },
    { color: 'grey', time: '16:00' },
    { color: 'black', time: '16:30' },
    { color: 'white', time: '17:00' },
    { color: 'silver', time: '17:30' },
    { color: 'silver', time: '18:00' },
];





// Voer deze functie uit om de tijd te updaten
function updateTime() {
    // Haal de huidige tijd op
    const now = new Date();

    // Bepaal het aantal minuten en seconden tot het einde van de huidige springronde
    const minutes = 30 - now.getMinutes() % 30;
    const seconds = 60 - now.getSeconds();

    // Zet de tijd in het formaat mm:ss

    const timeString = `${minutes}:${seconds}`;


    // Zet de tijd op het scherm
    clock.textContent = timeString;

    // Bepaal welk kleurenbandje momenteel aan het springen is
    const currentRound = Math.floor(now.getMinutes() / 30);

    // Zet de tekst voor het huidige kleurenbandje op het scherm
    colorText.textContent = `Huidig kleurenbandje: ${rounds[currentRound].color}`;

    // Zet de kleur van het kleurvlak op het scherm
    colorBox.style.backgroundColor = rounds[currentRound].color;

    // Maak de lijst met volgende springrondes leeg
    roundList.innerHTML = '';

    // Voeg voor iedere volgende springronde een lijstitem toe aan de lijst
    for (let i = currentRound + 1; i < rounds.length; i++) {
        // Maak een nieuw lijstitem aan
        const li = document.createElement('li');

        // Maak een nieuw kleurvlak aan en zet de juiste kleur
        const roundColorBox = document.createElement('div');
        roundColorBox.classList.add('color-box');
        roundColorBox.style.backgroundColor = rounds[i].color;

        // Maak een nieuw tekstelement aan voor het tijdstip van de volgende springronde
        const roundTime = document.createElement('span');
        roundTime.classList.add('round-time');
        roundTime.textContent = rounds[i].time;

        // Voeg het kleurvlak en het tijdstip toe aan het lijstitem
        li.appendChild(roundColorBox);
        li.appendChild(roundTime);

        // Voeg het lijstitem toe aan de lijst
        roundList.appendChild(li);

        
    }

}

const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

if (currentHour < 10 || (currentHour === 12 && currentMinute === 0) || (currentHour > 18 || (currentHour === 18 && currentMinute === 0))) {
  document.getElementById("popup").style.display = "block";
} else {
  document.getElementById("popup").style.display = "none"; 
}





