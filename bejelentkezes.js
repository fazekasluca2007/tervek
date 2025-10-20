document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const formTitle = document.getElementById("formTitle");
  const switchText = document.getElementById("switchText");
  const showRegister = document.getElementById("showRegister");

  // 🔁 Regisztrációs és bejelentkezési űrlap váltása
  showRegister.addEventListener("click", (e) => {
    e.preventDefault();

    if (registerForm.classList.contains("d-none")) {
      // Regisztrációs módra vált
      loginForm.classList.add("d-none");
      registerForm.classList.remove("d-none");
      formTitle.textContent = "Regisztráció";
      switchText.innerHTML = `Van már fiókod? <a href="#" id="showLogin">Jelentkezz be!</a>`;
    }

    // új hivatkozás eseménykezelője (dinamikusan létrejön)
    const showLogin = document.getElementById("showLogin");
    if (showLogin) {
      showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("d-none");
        registerForm.classList.add("d-none");
        formTitle.textContent = "Bejelentkezés";
        switchText.innerHTML = `Nincs fiókod? <a href="#" id="showRegister">Regisztrálj be!</a>`;
        // újra feliratkoztatjuk a showRegister eseményt
        document.getElementById("showRegister").addEventListener("click", (e) => {
          e.preventDefault();
          showRegister.click();
        });
      });
    }
  });

  // 💡 Bejelentkezés logika
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("Nincs regisztrált fiók. Kérlek, regisztrálj!");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.username === username && user.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Sikeres bejelentkezés!");
      window.location.href = "index.html";
    } else {
      alert("Hibás felhasználónév vagy jelszó!");
    }
  });

  // 💡 Regisztráció logika
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (username === "" || password === "") {
      alert("Kérlek, tölts ki minden mezőt!");
      return;
    }

    // Mentés a localStorage-be (demo célra)
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Sikeres regisztráció! Most bejelentkezhetsz.");

    // visszavált bejelentkezési módra
    registerForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
    formTitle.textContent = "Bejelentkezés";
    switchText.innerHTML = `Nincs fiókod? <a href="#" id="showRegister">Regisztrálj be!</a>`;
    document.getElementById("showRegister").addEventListener("click", (e) => {
      e.preventDefault();
      showRegister.click();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const userInfo = document.getElementById("userInfo");
  const usernameDisplay = document.getElementById("usernameDisplay");
  const logoutBtn = document.getElementById("logoutBtn");

  const loggedIn = localStorage.getItem("loggedIn");
  const storedUser = localStorage.getItem("user");

  if (loggedIn === "true" && storedUser) {
    const user = JSON.parse(storedUser);
    usernameDisplay.textContent = `${user.username}`;
    loginLink.classList.add("d-none");
    userInfo.classList.remove("d-none");
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("Sikeresen kijelentkeztél!");
    window.location.reload(); // Frissíti az oldalt
  });
});
