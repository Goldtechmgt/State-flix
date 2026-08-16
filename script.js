// Set precise targeted network launch matrix date: August 22, 2026 at 2:00 PM (14:00:00)
const targetLaunchTimestamp = new Date("August 22, 2026 14:00:00").getTime();

function updateStateflixTimer() {
    const currentServerTime = new Date().getTime();
    const durationRemaining = targetLaunchTimestamp - currentServerTime;

    // Check if the launch epoch timeline has wrapped or expired
    if (durationRemaining <= 0) {
        clearInterval(stateflixIntervalIdentifier);
        const countdownContainer = document.getElementById("timer-box");
        if (countdownContainer) {
            // HTML structural injection wrapped inside valid template backticks
            countdownContainer.innerHTML = `
                <div class="py-4 text-center animate-pulse">
                    <h2 class="text-xl font-black text-red-500 tracking-tight">🚀 STATEFLIX IS LIVE! REFRESH NOW TO ACTIVATE! 🚀</h2>
                </div>
            `;
        }
        return;
    }

    // Mathematical conversions for relative visual rendering blocks
    const calculatedDays = Math.floor(durationRemaining / (1000 * 60 * 60 * 24));
    const calculatedHours = Math.floor((durationRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const calculatedMinutes = Math.floor((durationRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const calculatedSeconds = Math.floor((durationRemaining % (1000 * 60)) / 1000);

    // Capture target elements
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Conditionally inject updates while ensuring clean zero-padding layout rules
    if (daysElement) daysElement.innerText = calculatedDays < 10 ? "0" + calculatedDays : calculatedDays;
    if (hoursElement) hoursElement.innerText = calculatedHours < 10 ? "0" + calculatedHours : calculatedHours;
    if (minutesElement) minutesElement.innerText = calculatedMinutes < 10 ? "0" + calculatedMinutes : calculatedMinutes;
    if (secondsElement) secondsElement.innerText = calculatedSeconds < 10 ? "0" + calculatedSeconds : calculatedSeconds;
}

// Call functions sequentially to guarantee immediate client runtime initialization
updateStateflixTimer();
const stateflixIntervalIdentifier = setInterval(updateStateflixTimer, 1000);

