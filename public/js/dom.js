const menuToggle = document.querySelector(".menu-toggle");
let sideBar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("open");
  sideBar.classList.toggle("show");
});
