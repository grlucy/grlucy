// ABOUT SECTION ----------------------------
const resumeLink = `./assets/resume/GinaLucyResume.pdf`;
const aboutContent = `
<div class="row">
 <div class="col-md-3 about-col">
   <img
     src="./assets/images/GINALUCY.jpg"
     alt="Gina Lucy Photo"
     id="headshot"
   />
 </div>
 <div class="col-md-9 about-col">
   <p>
     <a href="${resumeLink}" target="_blank">Download my resume</a>
   </p>
   <p>
     Full stack web developer located in Richmond, Virginia.
   </p>
   <p>
     Experienced with Node.js, Express, Express Handlebars, Mongo, Mongoose, MySQL, Sequelize, JavaScript, jQuery, Moment.js, Chart.js, HTML, CSS, Sass, Bootstrap, Materialize, and IndexedDB.
   </p>
   <p>
     Earned a Certificate in Full Stack Web Development (MERN Stack) from the University of Richmond in 2020. Passionate about learning to use new technologies and new evolutions of existing technologies to create efficient and scalable code. Interested in shaping the future trends of how people interact with software.
   </p>
   <p>
      Background in marketing and graphic design. Earned a B.S. Business Administration with a major in marketing from Old Dominion University. Skilled with the Adobe Creative Suite. Positioned well to translate client needs into a cohesive online brand identity.
   </p>
 </div>
</div>
`;

// PROJECTS SECTION ----------------------------
const projectsContent = `
<div class="row">
  <div class="col-md-12 text-center">
    <h3>Friendango</h3>
  </div>
</div>
<div class="row">
  <div class="col-md-5 text-center">
    <a
      href="./assets/images/Friendango-demo.gif"
      target="_blank"
      ><img
        src="./assets/images/Friendango-demo.gif"
        alt="Friendango Screenshot"
        class="project-img"
    /></a>
  </div>
  <div class="col-md-7 text-center">
    <p>
      <a
        href="https://friendango.herokuapp.com"
        target="_blank"
        >View Deployed Site</a
      ><br />
      <a
        href="https://github.com/grlucy/Friendango"
        target="_blank"
        >View GitHub Repository</a
      >
    </p>
    <p>
      Technologies used:
      <span class="tech-border"
        >
        Node.js, Express, Express Handlebars, MySQL, Sequelize, 
        JavaScript, jQuery, Heroku, JawsDB, OMDB API, HTML, CSS, 
        Bootstrap, Chart.js, ESLint, Dotenv, Passport
    </p>
    <p class="project-desc">
      A social network for movie reviews that enables a user to 
      submit their own reviews and view data about the reviews 
      submitted either by all users or by only the users they follow.
    </p>
  </div>
</div>

<div class="row">
  <div class="col-md-12 text-center">
    <h3>Burger Logger</h3>
  </div>
</div>
<div class="row">
  <div class="col-md-5 text-center">
    <a
      href="./assets/images/Burger-Logger-demo.gif"
      target="_blank"
      ><img
        src="./assets/images/Burger-Logger-demo.gif"
        alt="Burger Logger Screenshot"
        class="project-img"
    /></a>
  </div>
  <div class="col-md-7 text-center">
    <p>
      <a
        href="https://burger-logger-2020.herokuapp.com"
        target="_blank"
        >View Deployed Site</a
      ><br />
      <a
        href="https://github.com/grlucy/Burger-Logger"
        target="_blank"
        >View GitHub Repository</a
      >
    </p>
    <p>
      Technologies used:
      <span class="tech-border"
        >MySQL, Handlebars, Express, Node.js, JavaScript, jQuery,
        CSS, Bootstrap, HTML, Font Awesome Icons, Google
        Fonts</span
      >
    </p>
    <p class="project-desc">
      A responsive, RESTful Node.js/Express app using MySQL as a
      database and Handlebars to serve HTML that enables users to
      read, create, update, and delete data about burgers.
    </p>
  </div>
</div>

<div class="row">
  <div class="col-md-12 text-center">
    <h3>PetSpiration</h3>
  </div>
</div>
<div class="row">
  <div class="col-md-5 text-center">
    <a
      href="./assets/images/PetSpiration-demo.gif"
      target="_blank"
      ><img
        src="./assets/images/PetSpiration-demo.gif"
        alt="PetSpiration Screenshot"
        class="project-img"
    /></a>
  </div>
  <div class="col-md-7 text-center">
    <p>
      <a
        href="https://grlucy.github.io/pet-spiration/"
        target="_blank"
        >View Deployed Site</a
      ><br />
      <a
        href="https://github.com/grlucy/pet-spiration"
        target="_blank"
        >View GitHub Repository</a
      >
    </p>
    <p>
      Technologies used:
      <span class="tech-border"
        >HTML, CSS, Bootstrap, JavaScript, jQuery, Hammer.js,
        Petfinder API, Google Maps API, GeolocationAPI, Font
        Awesome Icons, Google Fonts</span
      >
    </p>
    <p class="project-desc">
      A responsive application that helps users decide what type
      of pet they want, matches users with available shelter
      animals, and then provides directions to the animal shelter.
    </p>
  </div>
</div>

<div class="row">
  <div class="col-md-12 text-center">
    <h3>Code Quiz</h3>
  </div>
</div>
<div class="row">
  <div class="col-md-5 text-center">
    <a href="./assets/images/Code-Quiz-demo.gif" target="_blank"
      ><img
        src="./assets/images/Code-Quiz-demo.gif"
        alt="Code Quiz Screenshot"
        class="project-img"
    /></a>
  </div>
  <div class="col-md-7 text-center">
    <p>
      <a
        href="https://grlucy.github.io/Code-Quiz/"
        target="_blank"
        >View Deployed Site</a
      ><br />
      <a
        href="https://github.com/grlucy/Code-Quiz"
        target="_blank"
        >View GitHub Repository</a
      >
    </p>
    <p>
      Technologies used:
      <span class="tech-border"
        >HTML, CSS, JavaScript, Google Fonts</span
      >
    </p>
    <p class="project-desc">
      A responsive, timer-based quiz application that stores high
      scores client-side.
    </p>
  </div>
</div>

<div class="row">
  <div class="col-md-12 text-center">
    <h3>Weather Dashboard</h3>
  </div>
</div>
<div class="row">
  <div class="col-md-5 text-center">
    <a
      href="./assets/images/Weather-Dashboard-demo.gif"
      target="_blank"
      ><img
        src="./assets/images/Weather-Dashboard-demo.gif"
        alt="Weather Dashboard Screenshot"
        class="project-img"
    /></a>
  </div>
  <div class="col-md-7 text-center">
    <p>
      <a
        href="https://grlucy.github.io/Weather-Dashboard/"
        target="_blank"
        >View Deployed Site</a
      ><br />
      <a
        href="https://github.com/grlucy/Weather-Dashboard"
        target="_blank"
        >View GitHub Repository</a
      >
    </p>
    <p>
      Technologies used:
      <span class="tech-border"
        >HTML, CSS, Bootstrap, JavaScript, jQuery, Moment.js,
        OpenWeather API, Geolocation API</span
      >
    </p>
    <p>
      A responsive weather dashboard that utilizes geolocation and
      the OpenWeather API.
    </p>
  </div>
</div>

<div class="row">
  <div class="col-md-12 text-center">
    <h3>Password Generator</h3>
  </div>
</div>
<div class="row">
  <div class="col-md-5 text-center">
    <a
      href="./assets/images/Password-Generator-demo.gif"
      target="_blank"
      ><img
        src="./assets/images/Password-Generator-demo.gif"
        alt="Password Generator Screenshot"
        class="project-img"
    /></a>
  </div>
  <div class="col-md-7 text-center">
    <p>
      <a
        href="https://grlucy.github.io/Password-Generator/"
        target="_blank"
        >View Deployed Site</a
      ><br />
      <a
        href="https://github.com/grlucy/Password-Generator"
        target="_blank"
        >View GitHub Repository</a
      >
    </p>
    <p>
      Technologies used:
      <span class="tech-border"
        >JavaScript, HTML, CSS, Bootstrap</span
      >
    </p>
    <p>
      A responsive application that generates a random password based on user-selected criteria.
    </p>
  </div>
</div>
`;

// CONTACT SECTION ----------------------------
const contactContent = `
<div class="col text-center">
  <h3>Call:</h3>
  <p>+1 757 652 3703</p>
  <br />
  <h3>Email:</h3>
  <p>
    <a href="mailto:ginalucy9@gmail.com">ginalucy9@gmail.com</a>
  </p>
</div>
`;
