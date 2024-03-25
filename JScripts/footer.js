document.getElementById("footer-contents").innerHTML = footer();

function footer() {
  return `<div class="flex-container footer-container">
  <div style="flex-grow: 1">
    <div class="footer-fonts"> © 2024 INARI </div>
    <a href="https://www.instagram.com/inaricloset/">
      Follow us on Instagram
      <img height="22px" width="22px" src="./images/icons/instagram-icon.svg" />
    </a>
  </div>
</div>`;
}
