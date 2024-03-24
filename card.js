document.getElementById("content").innerHTML = myCard();

function myCard() {
  data = "";
  for (let i = 1; i < 10; i++) {
    data += `<div class="card d-inline-flex card-size">
          <img src="./images/sandals/ladies_sandal${i}.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">Card title ${i}</h5>
          </div>
        </div>`;
  }

  return data;
}
