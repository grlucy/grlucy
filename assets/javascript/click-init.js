// VARIABLES -------------------

// Navigation Buttons
const aboutLandingBtn = $(".aboutLanding");
const aboutHamburgerBtn = $("#aboutTop");
const projectsLandingBtn = $(".projectsLanding");
const projectsHamburgerBtn = $("#projectsTop");
const contactLandingBtn = $(".contactLanding");
const contactHamburgerBtn = $("#contactTop");

// Navigation Menu
const hamburgerIcon = $("#hamburger");
const hamburgerMenu = $("#hamburger-menu");

// Content
const animatedBG = $("#animatedBG");
const landingNav = $("#landing-nav");
const mainContent = $("#main-content-section");
const logo = $(".logo");

// FUNCTIONS -------------------

function hideLanding() {
  hamburgerIcon.show();
  landingNav.hide();
  mainContent.empty();
  animatedBG.animate({ bottom: "100vh" }, "slow");
}
function showLanding() {
  mainContent.empty();
  animatedBG.animate({ bottom: "15vh" }, "slow");
  setTimeout(function() {
    hamburgerIcon.hide();
    landingNav.show();
  }, 600);
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
  mainContent.empty();
  mainContent.append($(contactContent));
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
  setTimeout(function() {
    contactClick();
  }, 600);
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
contactHamburgerBtn.on("click", function() {
  contactClick();
});

logo.on("click", function() {
  showLanding();
});
