const velemenyek = [
    "Anna;Csodás élmény volt! A szervezés profi, a programok változatosak.;5",
    "Balázs;Nagyon tetszett az ÖkoÚt koncepció! Jó érzés volt felelősen utazni.;4",
    "Kata;Kiváló szervezés, kedves idegenvezetők és csodás helyszínek.;5",
    "Dani;Minden flottul ment, de az időjárás közbeszólt. Ettől függetlenül szuper volt.;4",
    "Réka;Első utam az EcoTrippel, és biztosan nem az utolsó!;5",
    "Ádám;A busz kényelmes volt, de a szállás lehetett volna jobb.;3",
    "Lili;Nagyon tetszett, hogy kis csoportos volt az út, így családiasabb hangulat volt.;5",
    "Péter;Remek ár-érték arány! Köszönöm az élményt!;4",
    "Nóra;A gyerekeim is imádták, minden nap tele volt programmal!;5",
    "Zsófi;A természetközeli programok tetszettek a legjobban!;5",
    "Bence;Szuper csapat, barátságos légkör, új barátokat is szereztem.;5",
    "Marci;Jól éreztem magam, bár az étkezés lehetett volna változatosabb.;3",
    "Timi;Hihetetlen élmény, minden tökéletes volt!;5",
    "Gabi;Gyönyörű helyszínek, és jó szervezés. Biztosan visszatérek!;4",
    "Eszter;Szeretem, hogy figyelnek a fenntarthatóságra. Minden elismerésem!;5"
  ];

  const cont = document.getElementById("reviewsContainer");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  const pageInfo = document.getElementById("pageIndicator");

  const perPage = 6;
  let page = 1;
  const pages = Math.ceil(velemenyek.length / perPage);

  const render = () => {
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
  next.onclick = () => { if (page < pages) { page++; render(); } };
  render();