function WearsContent() {
  document.getElementById("full-content").style.display = "none";
  document.getElementById("mobile-content").style.display = "none";
  data = `<div class="card-container">
  <div class="card-title">Wears Collection</div>
  <div class="grid-container-card">`;
  for (i = 1; i < 2; i++) {
    data += `<div class="card">
        <img onclick="imageModal('./images/wears/wear${i}.jpg')"
          src="./images/wears/wear${i}.jpg"
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
