document.getElementById("body-contents").innerHTML = HomeContent("false");

function HomeContent(x) {
  if (x === "true") {
    document.getElementById("body-contents").innerHTML = HomeContent("false");
  } else {
    return `<img
  src="../images/main.jpg"
  width="100%"
  class="card-img-top"
  alt="..."
/>`;
  }
}
