const velemenyek = [
  "Anna;Csodás élmény volt! A szervezés profi, a programok változatosak.;5",
  "Balázs;Nagyon tetszett az ÖkoÚt koncepció! Jó érzés volt felelősen utazni.;4",
  "Kata;Kiváló szervezés, kedves idegenvezetők és csodás helyszínek.;5",
  "Dani;Minden flottul ment, de az időjárás közbeszólt. Ettől függetlenül szuper volt.;4",
  "Réka;Első utam az EcoTrippel, és biztosan nem az utolsó!;5"
];


const savedReviews = JSON.parse(localStorage.getItem("userReviews")) || [];
velemenyek.push(...savedReviews);

const cont = document.getElementById("reviewsContainer");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageIndicator");
const perPage = 6;
let page = 1;

const render = () => {
  const pages = Math.ceil(velemenyek.length / perPage);
  cont.innerHTML = velemenyek
    .slice((page - 1) * perPage, page * perPage)
    .map(v => {
      const [nev, szoveg, csill] = v.split(";");
      const stars = "<i class='fas fa-star'></i>".repeat(csill) + "<i class='far fa-star'></i>".repeat(5 - csill);
      return `
        <div class="col-md-4">
          <div class="review-card">
            <div class="review-stars">${stars}</div>
            <p class="review-text">"${szoveg}"</p>
            <h6>${nev}</h6>
          </div>
        </div>`;
    })
    .join("");

  pageInfo.textContent = `Oldal ${page}/${pages}`;
  prev.disabled = page === 1;
  next.disabled = page === pages;
};

prev.onclick = () => { if (page > 1) { page--; render(); } };
next.onclick = () => { if (page * perPage < velemenyek.length) { page++; render(); } };
render();


const form = document.getElementById("reviewForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const text = document.getElementById("reviewText").value.trim();
    const rating = document.getElementById("reviewRating").value;

    
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const userData = JSON.parse(localStorage.getItem("user") || "null");

    if (!loggedIn || !userData) {
      alert("Csak bejelentkezett felhasználók írhatnak véleményt!");
      return;
    }

    const userName = userData.fullName || userData.username;
    const uj = `${userName};${text};${rating}`;
    velemenyek.unshift(uj);

    savedReviews.unshift(uj);
    localStorage.setItem("userReviews", JSON.stringify(savedReviews));

    form.reset();
    alert("Köszönjük a véleményed!");
    render();
  });
}
