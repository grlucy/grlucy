// Variables

// Navigation Buttons
const aboutLandingBtn = $("#aboutLanding");
const aboutHamburgerBtn = $("#aboutTop");
const projectsLandingBtn = $("#projectsLanding");
const projectsHamburgerBtn = $("#projectsTop");
const contactLandingBtn = $("#contactLanding");
const contactHamburgerBtn = $("#contactTop");

// Navigation Menu
const hamburgerIcon = $("#hamburger");
const hamburgerMenu = $("#hamburger-menu");

// Content
const animatedBG = $("#animatedBG");
const mainContent = $("#main-content-section");
const logo = $(".logo");

// Functions

function aboutClick() {
  hamburgerIcon.show();
  mainContent.empty();
  animatedBG.animate({ bottom: "100vh" });
}
function projectsClick() {
  hamburgerIcon.show();
  mainContent.empty();
  animatedBG.animate({ bottom: "100vh" });
}
function contactClick() {
  hamburgerIcon.show();
  mainContent.empty();
  animatedBG.animate({ bottom: "100vh" });
}

// Click Events

aboutLandingBtn.on("click", function() {
  aboutClick();
});
projectsLandingBtn.on("click", function() {
  projectsClick();
});
contactLandingBtn.on("click", function() {
  contactClick();
});

hamburgerIcon.on("click", function() {
  hamburgerMenu.toggle();
});
logo.on("click", function() {
  location.reload();
});
