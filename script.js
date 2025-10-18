const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  // Change icon when opened/closed
  if (navbar.classList.contains("active")) {
    toggle.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  } else {
    toggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
  }
});
