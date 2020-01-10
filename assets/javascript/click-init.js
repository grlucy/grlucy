// VARIABLES -------------------

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

// FUNCTIONS -------------------

function hideLanding() {
  hamburgerIcon.show();
  mainContent.empty();
  animatedBG.animate({ bottom: "100vh" }, "slow");
}

function aboutClick() {
  mainContent.empty();
  setTimeout(function() {
    mainContent.append($(aboutContent));
  }, 600);
}
function projectsClick() {
  //
}
function contactClick() {
  //
}

// CLICK EVENTS -------------------

aboutLandingBtn.on("click", function() {
  hideLanding();
  aboutClick();
});
projectsLandingBtn.on("click", function() {
  hideLanding();
  projectsClick();
});
contactLandingBtn.on("click", function() {
  hideLanding();
  contactClick();
});

hamburgerIcon.on("click", function() {
  hamburgerMenu.toggle();
});

logo.on("click", function() {
  location.reload();
});
