document.getElementById("header-section").innerHTML = header();

function header() {
  return `<div class="container-fluid header-black sticky-top">
  <header class="d-flex flex-wrap py-3 mb-4 border-bottom">
    <a
      href="#"
      class="flex-grow-1 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <img class="logo-image" src="./images/icons/logo.png" />
      <span class="fs-4 fs-4copy"> INARI </span>
    </a>

    <div class="dropdown dropdown-disable">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        MENU
      </button>
      <ul class="dropdown-menu dropdown-menu-background">
        <li class="nav-item">
          <a href="/" class="dropdown-item" aria-current="page">
            <img
              height="22px"
              width="22px"
              src="./images/icons/house-heart-icon.svg"
            />
            Home</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="dropdown-item">
            <img
              height="22px"
              width="22px"
              src="./images/icons/sandal-icon.svg"
            />
            Shoes</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="dropdown-item">
            <img
              height="22px"
              width="22px"
              src="./images/icons/bag-icon.svg"
            />
            Bags</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="dropdown-item">
            <img
              height="22px"
              width="22px"
              src="./images/icons/dress-icon.svg"
            />
            Western Wears</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="dropdown-item" onclick="AboutContent()">
            <img
              height="22px"
              width="22px"
              src="./images/icons/book-icon.svg"
            />
            About</a
          >
        </li>
      </ul>
    </div>

    <ul class="nav nav-pills nav-pills-disable">
      <li class="nav-item">
        <a href="/" class="nav-link nav-design" aria-current="page">
          <img
            height="22px"
            width="22px"
            src="./images/icons/house-heart-icon.svg"
            class="icon-color"
          />
          Home</a
        >
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-design">
          <img
            height="22px"
            width="22px"
            src="./images/icons/heel-sandal-icon.svg"
          />
          Shoes</a
        >
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-design">
          <img
            height="22px"
            width="22px"
            src="./images/icons/bag-icon.svg"
          />
          Bags</a
        >
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-design">
          <img
            height="22px"
            width="22px"
            src="./images/icons/dress-icon.svg"
          />
          Western Wears</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link nav-design" onclick="AboutContent()">
          <img
            height="22px"
            width="22px"
            src="./images/icons/book-icon.svg"
          />
          About</a
        >
      </li>
    </ul>
  </header>
</div>`;
}
