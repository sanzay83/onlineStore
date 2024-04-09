document.getElementById("body-contents").innerHTML = HomeContent();

function HomeContent() {
  bodyData = ``;
  const carouselData = CarouselContent();
  const cardData = cardContent();
  const newArrival = newArrivalContent();
  bodyData += carouselData + cardData + newArrival;
  return bodyData;
}

function CarouselContent() {
  const quotes = [
    "Walk your path with style.",
    "Step into your dreams boldly.",
    "Sole mates for every journey.",
    "Shoes: where comfort meets fashion.",
    "Strut your stuff in confidence.",
    "Walk with purpose, wear elegance.",
    "Shoes: stepping stones of expression.",
    "Fashion at your feet daily.",
    "Shoes: the soul's silent storytellers.",
    "Kick up your heels joyfully.",
  ];

  const image = 4;
  let data = `<div class="slideshow-container">`;
  for (let i = 1; i <= image; i++) {
    data += `<div class="mySlides fade">
      <img src="./images/carousel/carousel-image${i}.jpg" style="width:100%">
      <div class="text">${quotes[i]}</div>
    </div>`;
  }
  data += `</div>`;
  return data;
}

/* ----------------------Carousel Funtion------------------------- */
let slideIndex = 0;
showSlides();
const showSlideIntervalId = setInterval(showSlides, 3000);
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; // Change image every 2 seconds
}

/* ----------------------Carousel Funtion------------------------- */
function cardContent() {
  tags = ["", "Shoes Collection", "Bags Collection", "Western Wears", "Sale"];
  links = [
    "",
    "ShoesContent()",
    "BagsContent()",
    "WearsContent()",
    "AboutContent()",
  ];
  data = `<div class="card-container">
  <div class="card-title">Shop our Collection</div>
  <div class="grid-container-card">`;
  for (i = 1; i < 5; i++) {
    data += `<a onclick="${links[i]}"><div class="card">
        <img
          src="./images/homeCollection/home${i}.jpg"
          alt="Avatar"
          style="width: 100%"
        />
        <p>${tags[i]}</p>
      </div></a>`;
  }
  data += `</div>
  </div>`;
  return data;
}

function newArrivalContent() {
  data = `<div class="newArrival-container">
  <div class="newArrival-grid">
    <img src="./images/newArrivals/102771.jpg">
    <img src="./images/newArrivals/16847.jpg">
    <img src="./images/newArrivals/2148752385.jpg">
    <div class="textOnNewArrival">New Arrival</div>
  </div>
</div>`;
  return data;
}
