// ==========================================
// INTERACTIVE AUTHENTICATION DRIVER MODULE
// ==========================================

// Global variable trackers for structural elements
let authModal, closeAuthBtn, loginForm, registerForm, tabLogin, tabRegister, authAlert;

// Listen for application setup milestones safely
document.addEventListener("DOMContentLoaded", () => {
  // Bind live authentication nodes
  authModal = document.getElementById("auth-modal");
  closeAuthBtn = document.getElementById("close-auth-btn");
  loginForm = document.getElementById("login-form");
  registerForm = document.getElementById("register-form");
  tabLogin = document.getElementById("tab-login");
  tabRegister = document.getElementById("tab-register");
  authAlert = document.getElementById("auth-alert");

  // Track portal layout trigger nodes across the screen matrix
  const triggerButtons = document.querySelectorAll(".nav-btn, .card-action-btn");
  
  triggerButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Determine form type from specific contextual element triggers
      if (button.classList.contains("nav-btn")) {
        switchAuthTab('login');
      } else {
        switchAuthTab('register');
      }
      authModal.classList.add("show-modal");
    });
  });

  // Attach overlay dismissal logic
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

// Component tab matrix switcher engine
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

// Simulated core database submission interceptor 
window.handleAuthSubmit = function(event, type) {
  event.preventDefault();
  
  // Flash confirmation metrics alert to client framework
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

  // Clear authentication screen smoothly following processing loops
  setTimeout(() => {
    authModal.classList.remove("show-modal");
    authAlert.style.display = "none";
    event.target.reset();
  }, 2500);
};
