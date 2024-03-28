document.getElementById("header-contents").innerHTML = header();

function mobFunction() {
  var x = document.getElementById("mobile-content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function deskFunction() {
  var x = document.getElementById("full-content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function header() {
  return `<div class="flex-container">
          <div style="flex-grow: 1">
          <a onclick="HomeContent('true')"><img height="65px" width="80px" src="./images/icons/logo.png" /></a>
          </div>
          <div style="flex-grow: 1">
          <a onclick="HomeContent('true')"><div class="logo-name">INARI'S CLOSET</div></a>
          </div>
          <div style="flex-grow: 4">
            <div class="menu-item">
              <ul>
                <li>
                  <a onclick="HomeContent('true')"> Home</a>
                </li>
                <li>
                  <div class="dropdown">
                    <a onclick="deskFunction()">Collections ▼</a>
                    <div id="full-content" class="dropdown-content">
                      <a onclick="ShoesContent()">Shoes</a>
                      <a onclick="BagsContent()">Bags</a>
                      <a onclick="WearsContent()">Western Wears</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a onclick="AboutContent()"> About</a>
                </li>
              </ul>
            </div>
          </div>
          <div style="flex-grow: 1">
            <div class="small-screen-menu dropdown">
              <a id="hamburger" onclick="mobFunction()">☰</a>
              <div id="mobile-content" class="dropdown-content">
                <a onclick="HomeContent('true')">Home</a>
                <a onclick="ShoesContent()">Shoes</a>
                <a onclick="BagsContent()">Bags</a>
                <a onclick="WearsContent()">Western Wears</a>
                <a onclick="AboutContent()">About</a>
              </div>
            </div>

            <div class="follow-item">
              <a href="https://www.instagram.com/inaricloset/"
                >Follow us
                <img
                  height="16px"
                  width="16px"
                  src="./images/icons/instagram-icon.svg"
              /></a>
            </div>
          </div>
        </div>
      </div>`;
}
