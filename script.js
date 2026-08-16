function startPreloader() {
  const progressBar = document.getElementById("progress-bar");
  const loadingPercentage = document.getElementById("loading-percentage");
  const preloader = document.getElementById("preloader");
  
  let currentProgress = 0;
  
  const interval = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 4) + 2;
    
    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(interval);
      progressBar.style.width = "100%";
      loadingPercentage.textContent = "100%";
      
      setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 400);
    } else {
      progressBar.style.width = currentProgress + "%";
      loadingPercentage.textContent = currentProgress + "%";
    }
  }, 35);
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  startPreloader();
} else {
  window.addEventListener("load", startPreloader);
}

let authModal, closeAuthBtn, loginForm, registerForm, tabLogin, tabRegister, authAlert;

window.addEventListener("load", () => {
  authModal = document.getElementById("auth-modal");
  closeAuthBtn = document.getElementById("close-auth-btn");
  loginForm = document.getElementById("login-form");
  registerForm = document.getElementById("register-form");
  tabLogin = document.getElementById("tab-login");
  tabRegister = document.getElementById("tab-register");
  authAlert = document.getElementById("auth-alert");

  document.querySelectorAll(".nav-btn, .card-action-btn").forEach(button => {
    button.addEventListener("click", () => {
      switchAuthTab(button.classList.contains("nav-btn") ? 'login' : 'register');
      authModal.classList.add("show-modal");
    });
  });

  if (closeAuthBtn) {
    closeAuthBtn.addEventListener("click", () => authModal.classList.remove("show-modal"));
  }
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
  authAlert.textContent = type === 'login' ? "Synchronizing secure nodes..." : "Portfolio account activated!";
  setTimeout(() => {
    authModal.classList.remove("show-modal");
    event.target.reset();
  }, 2000);
};
