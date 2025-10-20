document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const formTitle = document.getElementById("formTitle");
  const switchText = document.getElementById("switchText");
  const showRegister = document.getElementById("showRegister");

  // 🔁 Váltás bejelentkezés <-> regisztráció
  const toggleForms = (showRegisterForm) => {
    if (showRegisterForm) {
      loginForm.classList.add("d-none");
      registerForm.classList.remove("d-none");
      formTitle.textContent = "Regisztráció";
      switchText.innerHTML = `Van már fiókod? <a href="#" id="showLogin">Jelentkezz be!</a>`;
    } else {
      registerForm.classList.add("d-none");
      loginForm.classList.remove("d-none");
      formTitle.textContent = "Bejelentkezés";
      switchText.innerHTML = `Nincs fiókod? <a href="#" id="showRegister">Regisztrálj be!</a>`;
    }

    // új események dinamikus linkekhez
    document.getElementById("showRegister")?.addEventListener("click", (e) => {
      e.preventDefault();
      toggleForms(true);
    });
    document.getElementById("showLogin")?.addEventListener("click", (e) => {
      e.preventDefault();
      toggleForms(false);
    });
  };

  // Első váltó gomb
  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms(true);
  });

  // 💡 Bejelentkezés logika
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
      alert("Hibás felhasználónév vagy jelszó!");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", JSON.stringify(user));

    alert(`Üdv újra, ${user.fullName}!`);
    window.location.href = "index.html";
  });

  // 💚 Regisztráció logika
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const password2 = document.getElementById("regPassword2").value;

    if (!fullName || !username || !email || !password || !password2) {
      alert("Kérlek, tölts ki minden mezőt!");
      return;
    }

    if (password !== password2) {
      alert("A két jelszó nem egyezik!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.username === username)) {
      alert("Ez a felhasználónév már foglalt!");
      return;
    }

    // Mentés
    const newUser = { fullName, username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sikeres regisztráció! Most bejelentkezhetsz.");
    toggleForms(false);
  });
});

// 💬 Navbar felhasználónév megjelenítés (ha van navbar)
document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const userInfo = document.getElementById("userInfo");
  const usernameDisplay = document.getElementById("usernameDisplay");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginLink || !userInfo) return;

  const loggedIn = localStorage.getItem("loggedIn");
  const storedUser = localStorage.getItem("user");

  if (loggedIn === "true" && storedUser) {
    const user = JSON.parse(storedUser);
    usernameDisplay.textContent = user.username;
    loginLink.classList.add("d-none");
    userInfo.classList.remove("d-none");
  }

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("Sikeresen kijelentkeztél!");
    window.location.reload();
  });
});
