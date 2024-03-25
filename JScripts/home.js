document.getElementById("body-contents").innerHTML = HomeContent("false");

function HomeContent(x) {
  if (x === "true") {
    document.getElementById("body-contents").innerHTML = HomeContent("false");
  } else {
    bodyData = ``;
    const carouselData = CarouselContent();
    bodyData += carouselData + `<h1>shop our top collection</h1>`;
    return bodyData;
  }
}

function CarouselContent() {
  const quotes = [
    "Walk your path with style.",
    "Step into your dreams boldly.",
    "Shoes: where comfort meets fashion.",
    "Sole mates for every journey.",
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
      <img src="./images/sandals/carousel-image${i}.jpg" style="width:100%">
      <div class="text">${quotes[i]}</div>
    </div>`;
  }
  data += `</div>`;
  return data;
}

/* ----------------------Carousel Funtion------------------------- */
let slideIndex = 0;
showSlides();

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
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
