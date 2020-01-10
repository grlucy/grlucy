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
  mainContent.append($(aboutContent));
}
function projectsClick() {
  mainContent.empty();
  mainContent.append($(projectsContent));
}
function contactClick() {
  //
}

// CLICK EVENTS -------------------

// Landing Page Buttons
aboutLandingBtn.on("click", function() {
  hideLanding();
  setTimeout(function() {
    aboutClick();
  }, 600);
});
projectsLandingBtn.on("click", function() {
  hideLanding();
  setTimeout(function() {
    projectsClick();
  }, 600);
});
contactLandingBtn.on("click", function() {
  hideLanding();
  contactClick();
});

// Hamburger Menu
hamburgerIcon.on("click", function() {
  hamburgerMenu.toggle();
});
aboutHamburgerBtn.on("click", function() {
  aboutClick();
});
projectsHamburgerBtn.on("click", function() {
  projectsClick();
});

logo.on("click", function() {
  location.reload();
});
