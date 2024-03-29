function BagsContent() {
  document.getElementById("full-content").style.display = "none";
  document.getElementById("mobile-content").style.display = "none";
  data = `<div class="card-container">
  <div class="card-title">Bags Collection</div>
  <div class="grid-container-card">`;
  for (i = 1; i < 5; i++) {
    data += `<div class="card">
        <img onclick="imageModal('./images/bags/bag${i}.jpg')"
          src="./images/bags/bag${i}.jpg"
          alt="Avatar"
          style="width: 100%"
        />
        <p>Code #${i}</p>
      </div>`;
  }
  data += `</div>
  </div>`;
  document.getElementById("body-contents").innerHTML = data;
}
