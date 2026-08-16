// Set target launch date
const targetLaunchTimestamp = new Date("August 22, 2026 14:00:00").getTime();

function updateStateflixTimer() {
    const currentServerTime = new Date().getTime();
    const durationRemaining = targetLaunchTimestamp - currentServerTime;

    if (durationRemaining <= 0) {
        clearInterval(stateflixIntervalIdentifier);
        const countdownContainer = document.getElementById("timer-box");
        if (countdownContainer) {
            // FIXED: Added backticks around the HTML string to fix syntax error
            countdownContainer.innerHTML = `
                <div class="py-4 text-center animate-pulse">
                    <h2 class="text-xl font-black text-red-500 tracking-tight">🚀 STATEFLIX IS LIVE! 🚀</h2>
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

    // Update DOM
    if (document.getElementById("days")) document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    if (document.getElementById("hours")) document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    if (document.getElementById("minutes")) document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    if (document.getElementById("seconds")) document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

updateStateflixTimer();
const stateflixIntervalIdentifier = setInterval(updateStateflixTimer, 1000);

