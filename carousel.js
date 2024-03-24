document.getElementById("myCarousel").innerHTML = myCarousel();

function myCarousel() {
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
  data = `<div
  id="carouselExampleInterval"
  class="carousel-container slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img
        src="./images/sandals/carousel-image1.jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="container">
        <div class="carousel-caption text-end">
          <h1>Walk your path with style.</h1>
          <p>
            Some representative placeholder content for the third slide of
            this carousel.
          </p>
        </div>
      </div>
    </div>`;

  for (let i = 2; i < 5; i++) {
    data += `<div class="carousel-item" data-bs-interval="3000">
    <img
      src="./images/sandals/carousel-image${i}.jpg"
      class="d-block w-100"
      alt="..."
    />
    <div class="container">
      <div class="carousel-caption text-end">
        <h1>${quotes[i]}</h1>
        <p>
          Some representative placeholder content for the third slide of
          this carousel.
        </p>
      </div>
    </div>
  </div>`;
  }
  data += `</div></div>`;
  return data;
}
