// Setup correct future epoch launch date: August 22, 2026 14:00:00 (2:00 PM)
const targetLaunchTimestamp = new Date("August 22, 2026 14:00:00").getTime();

function updateStateflixTimer() {
    const currentServerTime = new Date().getTime();
    const durationRemaining = targetLaunchTimestamp - currentServerTime;

    if (durationRemaining <= 0) {
        clearInterval(stateflixIntervalIdentifier);
        const countdownContainer = document.getElementById("timer-box");
        if (countdownContainer) {
            // FIXED: Using valid template backticks around the innerHTML declaration string
            countdownContainer.innerHTML = `
                <div class="py-4 text-center animate-pulse">
                    <h2 class="text-xl font-black text-red-500 tracking-tight">🚀 STATEFLIX IS LIVE! REFRESH TO ACTIVATE ACCOUNTS! 🚀</h2>
                </div>
            `;
        }
        return;
    }

    // Time calculations
    const days = Math.floor(durationRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((durationRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((durationRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((durationRemaining % (1000 * 60)) / 1000);

    // Dom element assignments
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.innerText = days < 10 ? "0" + days : days;
    if (hoursElement) hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    if (minutesElement) minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (secondsElement) secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Instantiate immediately to eliminate layout loading shift
updateStateflixTimer();
const stateflixIntervalIdentifier = setInterval(updateStateflixTimer, 1000);
