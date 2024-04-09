function imageModal(src) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById(
    "imgId"
  ).innerHTML = `<div onclick="closeModal()" class="top-right">close</div><img src="${src}" style="width: 100%" />`;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
