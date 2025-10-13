const data = [
  {
    country: "Magyarország",
    flag: "img/zaszlok/hu.png",
    description: "Utazz zöldebben, fedezd fel Magyarország érintetlen szépségeit és fenntartható szállásait!",
    hotels: [
      { 
        city: "Budapest", 
        name: "Green Hotel Budapest", 
        stars: 5, 
        img: "img/okoutjaink kepek/greenhotel.jpg", 
        modalId: "greenModal", 
        modalText: `
          <img src="img/okoutjaink kepek/greenhotel.jpg" class="img-fluid rounded mb-3" alt="Green Hotel Budapest">
          <p><strong>Leírás:</strong> A Green Hotel Budapest a fenntarthatóság jegyében működik, napelemekkel, esővízgyűjtéssel és helyi termékeket kínáló éttermével. Kiváló választás azoknak, akik városi kényelem mellett is zölden szeretnének utazni.</p>
          <p><strong>Szolgáltatások:</strong> Elektromos autó töltő, organikus reggeli, energiatakarékos berendezések, zöldtető.</p>
          <p><strong>Ár:</strong> 59 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Budapest", 
        name: "Bohem Art Hotel", 
        stars: 3, 
        img: "img/okoutjaink kepek/bohemart.jpg", 
        modalId: "bohemModal", 
        modalText: `
          <img src="img/okoutjaink kepek/bohemart.jpg" class="img-fluid rounded mb-3" alt="Bohem Art Hotel">
          <p><strong>Leírás:</strong> A Bohem Art Hotel művészi környezetet és környezettudatos megoldásokat kínál Budapest szívében. Tökéletes választás a városi élet szerelmeseinek, akik értékelik az újrahasznosított anyagokat és a helyi dizájnt.</p>
          <p><strong>Szolgáltatások:</strong> Bio reggeli, újrahasznosított bútorok, LED világítás, helyi művészeti kiállítások.</p>
          <p><strong>Ár:</strong> 38 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Budapest", 
        name: "Continental Hotel", 
        stars: 4, 
        img: "img/okoutjaink kepek/continental.jpg", 
        modalId: "continentalModal", 
        modalText: `
          <img src="img/okoutjaink kepek/continental.jpg" class="img-fluid rounded mb-3" alt="Continental Hotel Budapest">
          <p><strong>Leírás:</strong> A Continental Hotel modern dizájnt ötvöz a fenntarthatósággal. Energiahatékony rendszerei és helyi beszállítói révén csökkentett ökológiai lábnyommal működik.</p>
          <p><strong>Szolgáltatások:</strong> Tetőmedence, wellness, elektromos autó töltő, helyi ételek.</p>
          <p><strong>Ár:</strong> 46 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Budapest", 
        name: "Intercontinental Hotel", 
        stars: 5, 
        img: "img/okoutjaink kepek/intercontinental.jpg", 
        modalId: "intercontinentalModal", 
        modalText: `
          <img src="img/okoutjaink kepek/intercontinental.jpg" class="img-fluid rounded mb-3" alt="Intercontinental Hotel Budapest">
          <p><strong>Leírás:</strong> Az Intercontinental Hotel a Duna-part egyik ikonikus épülete, ahol a luxus és a fenntarthatóság találkozik. A szálloda környezeti tanúsítvánnyal rendelkezik és aktívan támogatja a helyi ökoturizmust.</p>
          <p><strong>Szolgáltatások:</strong> Spa, gourmet étterem, víztakarékos rendszerek, zöldtanúsítvány.</p>
          <p><strong>Ár:</strong> 82 000 Ft / éjszaka / fő</p>
        `
      }
    ]
  },
  {
    country: "Olaszország",
    flag: "img/zaszlok/it.png",
    description: "„Olaszország a szépség és a fenntarthatóság harmóniáját kínálja minden utazó számára.”",
    hotels: [
      { 
        city: "Milánó", 
        name: "E.c.ho Hotel", 
        stars: 4, 
        img: "img/okoutjaink kepek/echo.jpg", 
        modalId: "milanoModal", 
        modalText: `
          <img src="img/okoutjaink kepek/echo.jpg" class="img-fluid rounded mb-3" alt="E.c.ho Hotel Milánó">
          <p><strong>Leírás:</strong> Az E.c.ho Hotel Milánó egyik legzöldebb szállodája, amelyet a fenntartható turizmus mintapéldájaként tartanak számon. Napelemes energiaellátás és zero-waste étterem jellemzi.</p>
          <p><strong>Szolgáltatások:</strong> Elektromos autó töltő, bio étterem, esővízgyűjtés, újrahasznosított anyagok.</p>
          <p><strong>Ár:</strong> 74 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Pinzolo", 
        name: "Lefay Resort & SPA Dolomiti", 
        stars: 5, 
        img: "img/okoutjaink kepek/lefay.jpg", 
        modalId: "pinzoloModal", 
        modalText: `
          <img src="img/okoutjaink kepek/lefay.jpg" class="img-fluid rounded mb-3" alt="Lefay Resort & SPA Dolomiti">
          <p><strong>Leírás:</strong> A Dolomitokban található Lefay Resort a természet közelségét és a luxust ötvözi. A szálloda geotermikus energiával és saját víztisztító rendszerrel működik.</p>
          <p><strong>Szolgáltatások:</strong> Hegyi kilátás, spa, organikus étterem, síelés, elektromos bicikli bérlés.</p>
          <p><strong>Ár:</strong> 120 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Tirol", 
        name: "Felder Alpin Lodge", 
        stars: 4, 
        img: "img/okoutjaink kepek/felder.jpg", 
        modalId: "tirolModal", 
        modalText: `
          <img src="img/okoutjaink kepek/felder.jpg" class="img-fluid rounded mb-3" alt="Felder Alpin Lodge">
          <p><strong>Leírás:</strong> Egy modern alpesi lodge, amely újrahasznosított anyagokból épült, és megújuló energiaforrásokkal működik. Tökéletes választás a természetközeli pihenéshez.</p>
          <p><strong>Szolgáltatások:</strong> Szauna, túraútvonalak, bio reggeli, elektromos fűtés, hegyi panoráma.</p>
          <p><strong>Ár:</strong> 65 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Etna", 
        name: "Monaci delle Terre Nere", 
        stars: 5, 
        img: "img/okoutjaink kepek/monaci.jpg", 
        modalId: "etnaModal", 
        modalText: `
          <img src="img/okoutjaink kepek/monaci.jpg" class="img-fluid rounded mb-3" alt="Monaci delle Terre Nere Etna">
          <p><strong>Leírás:</strong> Az Etna vulkán lábánál található Monaci delle Terre Nere egy ökogazdaságban működő luxusszállás, ahol minden szoba egyedi, természetes anyagokkal berendezve.</p>
          <p><strong>Szolgáltatások:</strong> Saját biofarm, borászat, medence, helyi ételek, napenergia.</p>
          <p><strong>Ár:</strong> 98 000 Ft / éjszaka / fő</p>
        `
      }
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
