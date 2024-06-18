let isOpen = false;
function openHamburger() {
  let hamburgerButton = document.getElementById("hamburger-nav-container");
  if (!isOpen) {
    hamburgerButton.style.display = "flex";
    isOpen = true;
  } else {
    hamburgerButton.style.display = "none";
    isOpen = false;
  }
}
