  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const progressBar = document.getElementById("progress-bar");
      const loadingPercentage = document.getElementById("loading-percentage");
      const loadingStatus = document.getElementById("loading-status");
      const preloader = document.getElementById("preloader");

      const statusPhrases = [
        "Securing firewall nodes...",
        "Initializing encryption handshakes...",
        "Allocating proxy clusters...",
        "Launching secure StateFlix framework...",
        "Authentication optimized."
      ];

      let currentProgress = 0;

      const loadingInterval = setInterval(() => {
        const progressStep = Math.floor(Math.random() * 4) + 2; 
        currentProgress += progressStep;

        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(loadingInterval);
          
          progressBar.style.width = "100%";
          loadingPercentage.textContent = "100%";
          loadingStatus.textContent = statusPhrases[statusPhrases.length - 1];

          setTimeout(() => {
            preloader.classList.add("fade-out");
          }, 500);
        } else {
          progressBar.style.width = currentProgress + "%";
          loadingPercentage.textContent = currentProgress + "%";

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
      }, 45);
    });

    // Modal Control Code
    let authModal, closeAuthBtn, loginForm, registerForm, tabLogin, tabRegister, authAlert;

    document.addEventListener("DOMContentLoaded", () => {
      authModal = document.getElementById("auth-modal");
      closeAuthBtn = document.getElementById("close-auth-btn");
      loginForm = document.getElementById("login-form");
      registerForm = document.getElementById("register-form");
      tabLogin = document.getElementById("tab-login");
      tabRegister = document.getElementById("tab-register");
      authAlert = document.getElementById("auth-alert");

      const triggerButtons = document.querySelectorAll(".nav-btn, .card-action-btn");
      
      triggerButtons.forEach(button => {
        button.addEventListener("click", () => {
          if (button.classList.contains("nav-btn")) {
            switchAuthTab('login');
          } else {
            switchAuthTab('register');
          }
          authModal.classList.add("show-modal");
        });
      });

      closeAuthBtn.addEventListener("click", () => {
        authModal.classList.remove("show-modal");
        authAlert.style.display = "none";
      });

      authModal.addEventListener("click", (e) => {
        if (e.target === authModal) {
          authModal.classList.remove("show-modal");
          authAlert.style.display = "none";
        }
      });
    });

    window.switchAuthTab = function(targetTab) {
      authAlert.style.display = "none";
      if (targetTab === 'login') {
        tabLogin.classList.add("active");
        tabRegister.classList.remove("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
      } else {
        tabRegister.classList.add("active");
        tabLogin.classList.remove("active");
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
      }
    };

    window.handleAuthSubmit = function(event, type) {
      event.preventDefault();
      authAlert.style.display = "block";
      if (type === 'login') {
        authAlert.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
        authAlert.style.borderColor = "rgba(16, 185, 129, 0.2)";
        authAlert.style.color = "#10b981";
        authAlert.textContent = "Agent session verified! Synchronizing secure dashboard nodes...";
      } else {
        authAlert.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
        authAlert.style.borderColor = "rgba(59, 130, 246, 0.2)";
        authAlert.style.color = "#3b82f6";
        authAlert.textContent = "Portfolio node initialized successfully! Verification link sent.";
      }
      setTimeout(() => {
        authModal.classList.remove("show-modal");
        authAlert.style.display = "none";
        event.target.reset();
      }, 2500);
    };
  </script>
