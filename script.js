const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuPopup = document.getElementById("mobile-menu-popup");

mobileMenuButton.addEventListener("click", () => {
  mobileMenuPopup.classList.toggle("hidden");
});
