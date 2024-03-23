document.getElementById("header-section").innerHTML = header();

function header() {
  return `<div class="container-fluid header-black">
          <header class="d-flex flex-wrap py-3 mb-4 border-bottom">
            <a
              href="/"
              class="d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <img class="logo-image" src="logo.png" />
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
                  <a href="#" class="dropdown-item" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                  <a href="./pages/" class="dropdown-item">Shoes</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="dropdown-item">Bags</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="dropdown-item">Western Wears</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="dropdown-item">About</a>
                </li>
              </ul>
            </div>
    
            <ul class="nav nav-pills nav-pills-disable">
              <li class="nav-item">
                <a href="#" class="nav-link active-defined" aria-current="page"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a href="./pages/" class="nav-link nav-design">Shoes</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-design">Bags</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-design">Western Wears</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-design">About</a>
              </li>
            </ul>
          </header>
        </div>`;
}
