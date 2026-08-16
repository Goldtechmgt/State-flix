/* ==========================================================================
   1. CORE PRELOADER PROGRESS COUNTING ENGINE
   ========================================================================== */
function startPreloader() {
  const progressBar = document.getElementById("progress-bar");
  const loadingPercentage = document.getElementById("loading-percentage");
  const loadingStatus = document.getElementById("loading-status");
  const preloader = document.getElementById("preloader");
  
  // Custom operational framework status notifications
  const statusPhrases = [
    "Securing firewall nodes...",
    "Initializing encryption handshakes...",
    "Allocating proxy clusters...",
    "Launching StateFlix engine...",
    "Authentication optimized."
  ];

  let currentProgress = 0;
  
  const interval = setInterval(() => {
    // Generates a random realistic speed step increment
    currentProgress += Math.floor(Math.random() * 4) + 2;
    
    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(interval);
      if (progressBar) progressBar.style.width = "100%";
      if (loadingPercentage) loadingPercentage.textContent = "100%";
      if (loadingStatus) loadingStatus.textContent = statusPhrases[statusPhrases.length - 1];
      
      // Smooth hardware-accelerated fade out window timeout
      setTimeout(() => {
        if (preloader) preloader.classList.add("fade-out");
      }, 400);
    } else {
      if (progressBar) progressBar.style.width = currentProgress + "%";
      if (loadingPercentage) loadingPercentage.textContent = currentProgress + "%";
      
      // Dynamically cycle through operational phrase status markers
      if (currentProgress < 25) {
        if (loadingStatus) loadingStatus.textContent = statusPhrases[0];
      } else if (currentProgress < 50) {
        if (loadingStatus) loadingStatus.textContent = statusPhrases[1];
      } else if (currentProgress < 75) {
        if (loadingStatus) loadingStatus.textContent = statusPhrases[2];
      } else {
        if (loadingStatus) loadingStatus.textContent = statusPhrases[3];
      }
    }
  }, 35);
}

// Fire preloader operations instantly upon node lifecycle completion
if (document.readyState === "complete" || document.readyState === "interactive") {
  startPreloader();
} else {
  window.addEventListener("load", startPreloader);
}

/* ==========================================================================
   2. DOM ELEMENT TRACKING & POPUP FORM WINDOW OVERLAYS
   ========================================================================== */
let authModal, closeAuthBtn, loginForm, registerForm, tabLogin, tabRegister, authAlert;
let landingView, dashboardView, headerActionBtn, agentDisplayName;

// Live wallet memory core tracking fields
let accountBalance = 0.00;
let commissionsEarned = 0.00;
let amountWithdrawn = 0.00;

window.addEventListener("load", () => {
  // Bind all interactive user nodes 
  authModal = document.getElementById("auth-modal");
  closeAuthBtn = document.getElementById("close-auth-btn");
  loginForm = document.getElementById("login-form");
  registerForm = document.getElementById("register-form");
  tabLogin = document.getElementById("tab-login");
  tabRegister = document.getElementById("tab-register");
  authAlert = document.getElementById("auth-alert");
  
  landingView = document.getElementById("landing-view");
  dashboardView = document.getElementById("dashboard-view");
  headerActionBtn = document.getElementById("header-action-btn");
  agentDisplayName = document.getElementById("agent-display-name");

  // Track interface activation components to pop modal windows
  document.querySelectorAll(".nav-btn, .card-action-btn").forEach(button => {
    button.addEventListener("click", () => {
      if (button.id === "header-action-btn" && headerActionBtn.textContent === "Sign Out") {
        processAccountSignOut();
      } else {
        switchAuthTab(button.classList.contains("nav-btn") ? 'login' : 'register');
        if (authModal) authModal.classList.add("show-modal");
      }
    });
  });

  if (closeAuthBtn) {
    closeAuthBtn.addEventListener("click", () => {
      if (authModal) authModal.classList.remove("show-modal");
    });
  }
});

// Component tab matrix switcher engine 
window.switchAuthTab = function(targetTab) {
  if (authAlert) authAlert.style.display = "none";
  if (targetTab === 'login') {
    if (tabLogin) tabLogin.classList.add("active");
    if (tabRegister) tabRegister.classList.remove("active");
    if (loginForm) loginForm.classList.add("active");
    if (registerForm) registerForm.classList.remove("active");
  } else {
    if (tabRegister) tabRegister.classList.add("active");
    if (tabLogin) tabLogin.classList.remove("active");
    if (registerForm) registerForm.classList.add("active");
    if (loginForm) loginForm.classList.remove("active");
  }
};

/* ==========================================================================
   3. FORM SUBMISSION INTERCEPTORS & INTERFACE SWITCHING 
   ========================================================================== */
window.handleAuthSubmit = function(event, type) {
  event.preventDefault();
  if (authAlert) authAlert.style.display = "block";
  
  let capturedName = "Agent_Prime";
  if (type === 'login') {
    const loginUserField = document.getElementById("login-username-field");
    if (loginUserField) capturedName = loginUserField.value;
    if (authAlert) authAlert.textContent = "Synchronizing secure dashboard nodes...";
  } else {
    const regUserField = document.getElementById("register-username-field");
    if (regUserField) capturedName = regUserField.value;
    if (authAlert) authAlert.textContent = "Portfolio account activated successfully!";
  }
  
  setTimeout(() => {
    if (authModal) authModal.classList.remove("show-modal");
    event.target.reset();
    launchUserDashboard(capturedName);
  }, 1500);
};

function launchUserDashboard(username) {
  if (landingView) landingView.style.display = "none";
  if (dashboardView) dashboardView.style.display = "block";
  if (headerActionBtn) headerActionBtn.textContent = "Sign Out";
  if (agentDisplayName) agentDisplayName.textContent = username;
  
  updateWalletDisplayUI();
}

function processAccountSignOut() {
  if (dashboardView) dashboardView.style.display = "none";
  if (landingView) landingView.style.display = "block";
  if (headerActionBtn) headerActionBtn.textContent = "Start Earning";
}

function updateWalletDisplayUI() {
  const walletBalEl = document.getElementById("wallet-balance");
  const totalCommEl = document.getElementById("total-commissions");
  const totalWithEl = document.getElementById("total-withdrawn");

  if (walletBalEl) walletBalEl.textContent = "$" + accountBalance.toFixed(2);
  if (totalCommEl) totalCommEl.textContent = "$" + commissionsEarned.toFixed(2);
  if (totalWithEl) totalWithEl.textContent = "$" + amountWithdrawn.toFixed(2);
}

/* ==========================================================================
   4. EARNING MATRIX TASK EXECUTIONS & BALANCE CONTROL LOGS
   ========================================================================== */
window.simulateTaskEarning = function(cashValue, taskTitle) {
  accountBalance += cashValue;
  commissionsEarned += cashValue;
  
  updateWalletDisplayUI();
  addLogToLedgerList(taskTitle, "+$" + cashValue.toFixed(2), false);
  alert("Success! Payout of $" + cashValue.toFixed(2) + " credited to your active balance ledger.");
};

function addLogToLedgerList(label, amountStr, isWithdrawal) {
  const ledgerHistory = document.getElementById("ledger-history");
  const emptyNotice = document.getElementById("empty-ledger-notice");
  
  if (emptyNotice) { emptyNotice.remove(); }
  if (!ledgerHistory) return;
  
  const newLogItem = document.createElement("li");
  newLogItem.className = "ledger-item";
  
  const colorClass = isWithdrawal ? "value-status minus-cash" : "value-status";
  
  newLogItem.innerHTML = `
    <span class="label-text">${label}</span>
    <span class="${colorClass}">${amountStr}</span>
  `;
  
  ledgerHistory.insertBefore(newLogItem, ledgerHistory.firstChild);
}

/* ==========================================================================
   5. MOBILE MONEY PAYOUT withdrawal EXECUTION
   ========================================================================== */
window.executeWithdrawalRequest = function() {
  if (accountBalance <= 0) {
    alert("Operation Denied: Your wallet balance is empty. Process queue jobs to stack payout metrics first!");
    return;
  }
  
  const promptAmount = confirm("Confirm immediate Mobile Money withdrawal request of: $" + accountBalance.toFixed(2) + "?");
  
  if (promptAmount) {
    const cashValueWithdrawn = accountBalance;
    amountWithdrawn += cashValueWithdrawn;
    accountBalance = 0.00; // Reset active wallet balances level back to zero
    
    updateWalletDisplayUI();
    addLogToLedgerList("Mobile Money Cashout", "-$" + cashValueWithdrawn.toFixed(2), true);
    alert("Instant Cashout initialized! Payout processing pipeline finalized cleanly.");
  }
};
