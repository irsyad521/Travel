const navigasi = document.querySelector(".navigasi");

document.querySelector("#menu").onclick = () => {
  navigasi.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navigasi.contains(e.target)) {
    navigasi.classList.remove("active");
  }
});
