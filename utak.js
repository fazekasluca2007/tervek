const data = [
  {
    country: "Magyarország",
    flag: "img/zaszlok/hu.png",
    description: "„Magyarország a történelem, a kultúra és a vendégszeretet találkozása – ahol minden város egy új történetet mesél, és minden táj egy új élményt kínál.”",
    hotels: [
      { 
        city: "Budapest", 
        name: "Aria Hotel", 
        stars: 5, 
        img: "img/utjaink kepek/hu_ariahotel.jpg", 
        modalId: "budapestModal", 
        modalText: `
          <img src="img/utjaink kepek/hu_ariahotel.jpg" class="img-fluid rounded mb-3" alt="Aria Hotel Budapest">
          <p><strong>Leírás:</strong> Az Aria Hotel Budapest szívében, a Szent István Bazilika mellett található luxusszálloda, mely zenei tematikájával és tetőteraszáról nyíló kilátásával páratlan élményt kínál.</p>
          <p><strong>Szolgáltatások:</strong> Wellness & spa, tetőterasz, étterem, ingyenes Wi-Fi, fitneszterem.</p>
          <p><strong>Ár:</strong> 65 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Lillafüred", 
        name: "Hunguest Hotel Palota", 
        stars: 4, 
        img: "img/utjaink kepek/hu_palotaszallo.jpg", 
        modalId: "lillafuredModal", 
        modalText: `
          <img src="img/utjaink kepek/hu_palotaszallo.jpg" class="img-fluid rounded mb-3" alt="Hunguest Hotel Palota">
          <p><strong>Leírás:</strong> A festői Hámori-tó partján, a Bükk-hegység szívében álló Palotaszálló a természet szerelmeseinek tökéletes választás.</p>
          <p><strong>Szolgáltatások:</strong> Wellness részleg, erdei túraútvonalak, étterem, horgászat, parkoló.</p>
          <p><strong>Ár:</strong> 38 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Szeged", 
        name: "Danubius Hotel Helia", 
        stars: 4, 
        img: "img/utjaink kepek/hu_danubis.jpg", 
        modalId: "szegedModal", 
        modalText: `
          <img src="img/utjaink kepek/hu_danubis.jpg" class="img-fluid rounded mb-3" alt="Danubius Hotel Helia">
          <p><strong>Leírás:</strong> A napfény városában található hotel modern felszereltségével és központi elhelyezkedésével ideális pihenésre és városnézésre is.</p>
          <p><strong>Szolgáltatások:</strong> Medence, szauna, étterem, konferenciaterem, Wi-Fi.</p>
          <p><strong>Ár:</strong> 32 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Pécs", 
        name: "Palatinus Grand Hotel", 
        stars: 4, 
        img: "img/utjaink kepek/hu_platinus.jpg", 
        modalId: "pecsModal", 
        modalText: `
          <img src="img/utjaink kepek/hu_platinus.jpg" class="img-fluid rounded mb-3" alt="Palatinus Grand Hotel">
          <p><strong>Leírás:</strong> A Palatinus Grand Hotel a pécsi belváros szívében helyezkedik el, gyönyörű szecessziós stílusban. A város kulturális látnivalói mind pár perc sétára találhatók.</p>
          <p><strong>Szolgáltatások:</strong> Étterem, bár, wellness, parkolási lehetőség.</p>
          <p><strong>Ár:</strong> 29 500 Ft / éjszaka / fő</p>
        `
      }
    ]
  },
  {
    country: "Olaszország",
    flag: "img/zaszlok/it.png",
    description: "„Olaszország a művészet, a gasztronómia és a dolce vita hazája – ahol minden utca egy festmény, minden étel egy élmény, és minden pillanat egy emlék.”",
    hotels: [
      { 
        city: "Róma", 
        name: "Hotel Artemide", 
        stars: 4, 
        img: "img/utjaink kepek/it_artemide.jpg", 
        modalId: "romaModal", 
        modalText: `
          <img src="img/utjaink kepek/it_artemide.jpg" class="img-fluid rounded mb-3" alt="Hotel Artemide Róma">
          <p><strong>Leírás:</strong> A történelmi Róma szívében található hotel tökéletes kiindulópont a Colosseum, a Trevi-kút és a Vatikán felfedezéséhez.</p>
          <p><strong>Szolgáltatások:</strong> Tetőterasz, olasz étterem, spa részleg, 24 órás recepció.</p>
          <p><strong>Ár:</strong> 72 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Toszkána", 
        name: "Agriturismo La Poggiolina", 
        stars: 3, 
        img: "img/utjaink kepek/it_lapoggiolina.jpg", 
        modalId: "toszkanaModal", 
        modalText: `
          <img src="img/utjaink kepek/it_lapoggiolina.jpg" class="img-fluid rounded mb-3" alt="Agriturismo La Poggiolina">
          <p><strong>Leírás:</strong> Egy autentikus vidéki szállás a toszkán dombok között, helyi borokkal, házi ételekkel és lélegzetelállító kilátással.</p>
          <p><strong>Szolgáltatások:</strong> Borkóstoló, kert, medence, házi készítésű reggeli.</p>
          <p><strong>Ár:</strong> 41 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Nápoly", 
        name: "Grand Hotel Vesuvio", 
        stars: 5, 
        img: "img/utjaink kepek/it_grandhotel.jpg", 
        modalId: "napolyModal", 
        modalText: `
          <img src="img/utjaink kepek/it_grandhotel.jpg" class="img-fluid rounded mb-3" alt="Grand Hotel Vesuvio Nápoly">
          <p><strong>Leírás:</strong> A Grand Hotel Vesuvio Nápoly egyik legismertebb tengerparti szállodája, kilátással a Vezúvra és Capri szigetére.</p>
          <p><strong>Szolgáltatások:</strong> Tetőétterem, spa, medence, concierge, tengerpart közeli elhelyezkedés.</p>
          <p><strong>Ár:</strong> 89 000 Ft / éjszaka / fő</p>
        `
      },
      { 
        city: "Firenze", 
        name: "Hotel Bernini Palace", 
        stars: 5, 
        img: "img/utjaink kepek/it_hotelnbernini.jpg", 
        modalId: "firenzeModal", 
        modalText: `
          <img src="img/utjaink kepek/it_hotelnbernini.jpg" class="img-fluid rounded mb-3" alt="Hotel Bernini Palace Firenze">
          <p><strong>Leírás:</strong> Firenze szívében, a Piazza della Signoria közelében található elegáns hotel, ahol a reneszánsz hangulat és a modern luxus tökéletesen keveredik.</p>
          <p><strong>Szolgáltatások:</strong> Étterem, történelmi berendezés, concierge, luxus szobák, ingyenes Wi-Fi.</p>
          <p><strong>Ár:</strong> 97 000 Ft / éjszaka / fő</p>
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
