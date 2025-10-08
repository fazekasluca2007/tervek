const data = [
  {
    country: "Magyarország",
    flag: "img/zaszlok/hu.png",
    description: "„Magyarország a történelem, a kultúra és a vendégszeretet találkozása – ahol minden város egy új történetet mesél, és minden táj egy új élményt kínál.”",
    hotels: [
      { city: "Budapest", name: "Aria Hotel", stars: 5, img: "img/utjaink kepek/hu_ariahotel.jpg", modalId: "budapestModal", modalText: "Budapest a főváros, híres a Dunáról, a Parlamentről és a termálfürdőkről." },
      { city: "Lillafüred", name: "Hunguest Hotel Palota", stars: 4, img: "img/utjaink kepek/hu_palotaszallo.jpg", modalId: "lillafureddModal", modalText: "Lillafüred híres a vízesésről és a Palotaszállóról." },
      { city: "Szeged", name: "Danubius Hotel Helia", stars: 4, img: "img/utjaink kepek/hu_danubis.jpg", modalId: "szegedModal", modalText: "Szeged a napfény városa, a Dóm tér és a halászlé hazája." },
      { city: "Pécs", name: "Palatinus Grand Hotel", stars: 4, img: "img/utjaink kepek/hu_platinus.jpg", modalId: "pecsModal", modalText: "Pécs mediterrán hangulatú város, híres a Zsolnay-negyedről és az UNESCO világörökségről." }
    ]
  },
  {
    country: "Olaszország",
    flag: "img/zaszlok/it.png",
    description: "„Olaszország a művészet, a gasztronómia és a dolce vita hazája – ahol minden utca egy festmény, minden étel egy élmény, és minden pillanat egy emlék.”",
    hotels: [
      { city: "Róma", name: "Hotel Artemide", stars: 4, img: "img/utjaink kepek/it_artemide.jpg", modalId: "romaModal", modalText: "Róma nevezetességei..." },
      { city: "Toszkána", name: "Agriturismo La Poggiolina", stars: 3, img: "img/utjaink kepek/it_lapoggiolina.jpg", modalId: "toszkanaModal", modalText: "Toszkána híres borairól és tájairól." },
      { city: "Nápoly", name: "Grand Hotel Vesuvio", stars: 5, img: "img/utjaink kepek/it_grandhotel.jpg", modalId: "napolyModal", modalText: "Nápoly a pizza hazája, lenyűgöző tengerparttal." },
      { city: "Firenze", name: "Hotel Bernini Palace", stars: 5, img: "img/utjaink kepek/it_hotelnbernini.jpg", modalId: "firenzeModal", modalText: "Firenze reneszánsz művészeti központ." }
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