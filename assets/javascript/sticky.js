// Control positioning of navbar
const stickyNav = document.getElementById("stickyNav");
const sticky = stickyNav.offsetTop;

window.onscroll = () => {
  navStick();
};

window.onload = () => {
  navStick();
};

function navStick() {
  if (window.pageYOffset >= sticky) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }
}

// Control navbar hamburger menu toggle on mobile
const toggleLinks = $("#navbarSupportedContent");
const hamburgerBtn = $("#hamburgerBtn");

toggleLinks.on("click", e => {
  toggleLinks.toggle();
});
hamburgerBtn.on("click", e => {
  toggleLinks.toggle();
});
