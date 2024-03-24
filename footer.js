document.getElementById("footer-section").innerHTML = footer();

function footer() {
  return `<div class="footer-container">
  <footer class="grid-container footer-text-character">
    <div>
      <img class="logo-image" src="./images/icons/logo.png" />
      <span class="">© 2024 INARI </span>
    </div>

    <a href="https://www.instagram.com/inaricloset/" class="nav-link">
      <img
        height="22px"
        width="22px"
        src="./images/icons/instagram-icon.svg"
      />
      Follow us on Instagram
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item">
        <a href="/" class="nav-link footer-nav-link" aria-current="page">
          Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link footer-nav-link"> Shoes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link footer-nav-link"> Bags</a>
      </li>
      <li class="nav-item">
        <a class="nav-link footer-nav-link"> Western Wears</a>
      </li>
      <li class="nav-item">
        <a class="nav-link footer-nav-link" onclick="AboutContent()">
          About</a
        >
      </li>
    </ul>
  </footer>
</div>`;
}
