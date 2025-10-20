document.addEventListener("DOMContentLoaded", () => {
  const foglalasBtn = document.getElementById("foglalasBtn");

  if (foglalasBtn) {
    foglalasBtn.addEventListener("click", () => {
      const loggedIn = localStorage.getItem("loggedIn");

      if (!loggedIn) {
        window.location.href = "bejelentkezes.html";
      } else {
        window.location.href = "utjaink.html";
      }
    });
  }
});