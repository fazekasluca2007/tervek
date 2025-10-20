document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const formTitle = document.getElementById("formTitle");
  const switchText = document.getElementById("switchText");
  const showRegister = document.getElementById("showRegister");

  // 🔁 Váltás bejelentkezés <-> regisztráció
  const toggleForms = (showRegisterForm) => {
    if (!loginForm || !registerForm) return;

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

    // új események a dinamikus linkekhez
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
  showRegister?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms(true);
  });

  // 💡 Bejelentkezés logika
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
      alert("Hibás felhasználónév vagy jelszó!");
      return;
    }

    // 🔐 Mentés
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", JSON.stringify(user));

    alert(`Üdv újra, ${user.fullName}!`);
    window.location.href = "velemenyek.html";
  });

  // 💚 Regisztráció logika
  registerForm?.addEventListener("submit", (e) => {
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

    const newUser = { fullName, username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sikeres regisztráció! Most bejelentkezhetsz.");
    toggleForms(false);
  });
});


// 💬 Navbar + Vélemény szekció kezelése
document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const userInfo = document.getElementById("userInfo");
  const usernameDisplay = document.getElementById("usernameDisplay");
  const logoutBtn = document.getElementById("logoutBtn");
  const addReviewSection = document.getElementById("addReviewSection");

  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");

  if (loggedIn && storedUser) {
    // Navbar frissítés
    if (loginLink && userInfo && usernameDisplay) {
      usernameDisplay.textContent = storedUser.username;
      loginLink.classList.add("d-none");
      userInfo.classList.remove("d-none");
    }

    // Vélemény író rész megjelenítése
    if (addReviewSection) {
      addReviewSection.classList.remove("d-none");
    }
  } else {
    // Nincs bejelentkezve
    if (loginLink && userInfo) {
      loginLink.classList.remove("d-none");
      userInfo.classList.add("d-none");
    }

    if (addReviewSection) {
      addReviewSection.classList.add("d-none");
    }
  }

  // Kijelentkezés
  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    alert("Sikeresen kijelentkeztél!");
    window.location.reload();
  });
});
