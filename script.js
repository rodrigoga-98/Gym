const menuToggle = document.querySelector(".side-menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const menuOverlay = document.querySelector(".menu-overlay");

const toggleMenu = () => {
  sideMenu.classList.toggle("open");
  menuOverlay.classList.toggle("show");
};

if (menuToggle && sideMenu && menuOverlay) {
  menuToggle.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);
}
