const data = [
  {
    country: "Magyarország",
    flag: "img/zaszlok/hu.png",
    description: "Utazz zöldebben, fedezd fel Magyarország érintetlen szépségeit!",
    hotels: [
      { city: "Budapest", name: "Green Hotel Budapest", stars: 5, img: "img/okoutjaink kepek/greenhotel.jpg", modalId: "budapestModal", modalText: "Budapest a főváros, híres a Dunáról, a Parlamentről és a termálfürdőkről." },
      { city: "Budapest", name: "Bohem Art Hotel", stars: 3, img: "img/okoutjaink kepek/bohemart.jpg", modalId: "budapestModal", modalText: "Budapest a főváros, híres a Dunáról, a Parlamentről és a termálfürdőkről." },
      { city: "Budapest", name: "Continental Hotel", stars: 4, img: "img/okoutjaink kepek/continental.jpg", modalId: "budapestModal", modalText: "Budapest a főváros, híres a Dunáról, a Parlamentről és a termálfürdőkről." },
      { city: "Budapest", name: "Intercontinental Hotel", stars: 5, img: "img/okoutjaink kepek/intercontinental.jpg", modalId: "budapestModal", modalText: "Budapest a főváros, híres a Dunáról, a Parlamentről és a termálfürdőkről."}
    ]
  },
  {
    country: "Olaszország",
    flag: "img/zaszlok/it.png",
    description: "„Olaszország a szépség és a fenntarthatóság harmóniáját kínálja minden utazó számára.”",
    hotels: [
      { city: "Milánó", name: "E.c.ho Hotel", stars: 4, img: "img/okoutjaink kepek/echo.jpg", modalId: "milanoModal", modalText: "Milánó nevezetességei..." },
      { city: "Pinzolo", name: "Lefay Resort & SPA Dolomiti", stars: 3, img: "img/okoutjaink kepek/lefay.jpg", modalId: "pinzoloModal", modalText: "Pinzolo nevezetességei..." },
      { city: "Tirol", name: "Felder Alpin Lodge", stars: 4, img: "img/okoutjaink kepek/felder.jpg", modalId: "tirolModal", modalText: "Tirol nevezetességei..." },
      { city: "Etna", name: " Monaci delle Terre Nere ", stars: 5, img: "img/okoutjaink kepek/monaci.jpg", modalId: "etnaModal", modalText: "Etna nevezetességei..." }
    ]
  }
];

// Generálás
const container = document.getElementById("countries-container");

data.forEach(country => {
  // Ország szekció
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("my-5");

  countryDiv.innerHTML = `
    <div class="country-banner d-flex align-items-center mb-4">
      <div class="flag-box me-3">
        <img src="${country.flag}" alt="${country.country} zászló" class="zaszlokep">
      </div>
      <div>
        <h3 class="mb-1">${country.country}</h3>
        <p class="fst-italic">${country.description}</p>
      </div>
    </div>
    <div class="slider-wrapper">
      <button class="slider-btn left" onclick="moveSlide('${country.country}', -1)">&#10094;</button>
      <div class="slider-container">
        <div class="slider-track" id="slider-${country.country}">
          ${country.hotels.map(hotel => `
            <div class="card shadow-sm hotel-card" data-bs-toggle="modal" data-bs-target="#${hotel.modalId}">
              <img src="${hotel.img}" alt="${hotel.name}" class="szallaskepek">
              <div class="card-body text-center">
                <h6>${hotel.city}</h6>
                <p>${hotel.name} ${'★'.repeat(hotel.stars)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="slider-btn right" onclick="moveSlide('${country.country}', 1)">&#10095;</button>
    </div>
  `;

  container.appendChild(countryDiv);

  // Modálok generálása
  country.hotels.forEach(hotel => {
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal", "fade");
    modalDiv.id = hotel.modalId;
    modalDiv.tabIndex = -1;
    modalDiv.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${hotel.city}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">${hotel.modalText}</div>
          <div class="modal-footer">
            <button class="btn btn-outline-primary">Foglalás</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalDiv);
  });
});

// Slider funkció
const positions = {};

function moveSlide(country, step) {
  const track = document.getElementById("slider-" + country);
  const cards = track.children.length;
  const visible = 4; // egyszerre 4 fér ki
  const maxPos = cards - visible;

  positions[country] = positions[country] || 0;
  positions[country] += step;

  if (positions[country] < 0) positions[country] = 0;
  if (positions[country] > maxPos) positions[country] = maxPos;

  const movePercent = -(positions[country] * (100 / visible));
  track.style.transform = `translateX(${movePercent}%)`;
}