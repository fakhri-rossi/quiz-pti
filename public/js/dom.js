// import trendingMusic from "./data.js";
// import packagePlan from "./data.js";
// import blog from "./data.js";

const menuToggle = document.querySelector(".menu-toggle");
let sideBar = document.querySelector(".sidebar");

const sectionTrends = document.querySelector(".trend-list");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("open");
  sideBar.classList.toggle("show");
});
