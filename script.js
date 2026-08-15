document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  const loadingPercentage = document.getElementById("loading-percentage");
  const loadingStatus = document.getElementById("loading-status");
  const preloader = document.getElementById("preloader");

  // Custom operational status notifications
  const statusPhrases = [
    "Securing firewall nodes...",
    "Initializing encryption handshakes...",
    "Allocating proxy clusters...",
    "Launching secure StateFlix framework...",
    "Authentication optimized."
  ];

  let currentProgress = 0;

  const loadingInterval = setInterval(() => {
    // Generates a random speed step increment
    const progressStep = Math.floor(Math.random() * 4) + 2; 
    currentProgress += progressStep;

    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(loadingInterval);
      
      progressBar.style.width = "100%";
      loadingPercentage.textContent = "100%";
      loadingStatus.textContent = statusPhrases[statusPhrases.length - 1];

      // Smooth removal overlay timeout
      setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 500);
    } else {
      progressBar.style.width = currentProgress + "%";
      loadingPercentage.textContent = currentProgress + "%";

      // Dynamically cycle through status markers based on percentage milestones
      if (currentProgress < 25) {
        loadingStatus.textContent = statusPhrases[0];
      } else if (currentProgress < 50) {
        loadingStatus.textContent = statusPhrases[1];
      } else if (currentProgress < 75) {
        loadingStatus.textContent = statusPhrases[2];
      } else {
        loadingStatus.textContent = statusPhrases[3];
      }
    }
  }, 45); // Adjust time spacing value to speed up or slow down counter
});
