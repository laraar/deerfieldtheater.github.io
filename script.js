/** @format */

// Get references to the image and clickable object
const showImage = document.getElementById("showlogo");
const homeBtn = document.getElementById("home");
const pastShowsBtn = document.getElementById("pastshows");
const donationsBtn = document.getElementById("donations");
const aboutBtn = document.getElementById("about");
const homePage = document.getElementById("home-page");
const pastShows = document.getElementById("past-shows");
const donationsPage = document.getElementById("donations-page");
const aboutPage = document.getElementById("about-page");
const photoBox = document.getElementById("photo-box");
const theaterdBtn = document.getElementById("theaterd");
const deerfieldtyaBtn = document.getElementById("deerfieldtya");

function changeTextColor(color) {
  // Get all elements with the class 'example-text'
  const elements = document.getElementsByClassName("nav-btn");

  // Loop through each element and change its text color
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = color; // You can set any color you want
  }
}

// Add a click event listener to the clickable object
homeBtn.addEventListener("click", function () {
  // Turn on show-announcement div and photo-box div
  homePage.style.display = "block";
  photoBox.style.display = "block";
  // Turn off past-shows, donations, and about
  pastShows.style.display = "none";
  donationsPage.style.display = "none";
  aboutPage.style.display = "none";
  // Change the image source when clicked
  // headerImage.src = "images/DFT-header.png";
  //Change show logo for division
  // showImage.src = "images/DFT-show.jpg";
  // showImage.style.width = "100%";
  //Change background image
  // const imageUrl = "images/embossed.jpg";
  // document.body.style.backgroundImage = "url('" + imageUrl + "')";
  //Change nav bar text color
  // changeTextColor("#503b79");
  window.scrollTo(0, 0);
});

// Add a click event listener to the clickable object
pastShowsBtn.addEventListener("click", function () {
  // Turn on past-shows block
  pastShows.style.display = "block";
  //Turn off show-announcement, donations, about, and photo-box
  homePage.style.display = "none";
  donationsPage.style.display = "none";
  aboutPage.style.display = "none";
  photoBox.style.display = "none";
  window.scrollTo(0, 0);
});

// Add a click event listener to the clickable object
donationsBtn.addEventListener("click", function () {
  // Turn on donations-page block
  donationsPage.style.display = "block";
  //Turn off show-announcement, past=shows, about, and photo-box
  homePage.style.display = "none";
  pastShows.style.display = "none";
  aboutPage.style.display = "none";
  photoBox.style.display = "none";
  window.scrollTo(0, 0);
});

// Add a click event listener to the clickable object
aboutBtn.addEventListener("click", function () {
  // Turn on about block
  aboutPage.style.display = "block";
  //Turn off show-announcement, donations, about, and photo-box
  homePage.style.display = "none";
  donationsPage.style.display = "none";
  pastShows.style.display = "none";
  photoBox.style.display = "none";
  window.scrollTo(0, 0);
});

// Add a click event listener to the clickable object
theaterdBtn.addEventListener("click", function () {
  // Go to DFT page
  // window.location.href = "https://www.theaterd.com";
  window.location.href = "https://www.theaterd.com";
});

// Add a click event listener to the clickable object
deerfieldtyaBtn.addEventListener("click", function () {
  // Go to DTYA page
  // window.location.href = "https://www.deerfieldfamilytheater.com/DTYA-index.html";
  window.location.href = "https://www.deerfieldfamilytheater.com/DTYA/index.html";
});

document.addEventListener("DOMContentLoaded", function () {
  //Change version number of css file
  var cssLink = document.getElementById("main-css");
  cssLink.href = cssLink.href + "?v=" + Date.now();

  //zoom the show log in its container
  var image = document.getElementById("showlogo");
  image.classList.add("zoom-in");

  //slides
  var slides = document.querySelectorAll(".photo");
  var currentSlide = 0;
  // Set the initial opacity of all slides to 0 except for the first one
  for (var i = 1; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  function nextSlide() {
    // Fade out the current slide
    slides[currentSlide].style.opacity = 0;
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Fade in the next slide
    slides[currentSlide].style.opacity = 1;
  }
  // Start the slideshow
  setInterval(nextSlide, 4500);
});

// Make navbar sticky when user scrolls down
window.onscroll = function () {
  let programHeaderBottom = document
    .querySelector("#program-header")
    .getBoundingClientRect().bottom;
  let navBar = document.querySelector("#nav-bar");
  const navBarLogoContainer = document.getElementById("nav-bar-logo-container");
  const mainPageContent = document.getElementById("main-page-content");
  const afterHeader = document.querySelector(".after-header");

  if (programHeaderBottom < 0) {
    navBar.classList.add("sticky");
    navBarLogoContainer.style.display = "block";
    mainPageContent.style.paddingTop = "calc(var(--cw) * 7.5)";
    afterHeader.style.background =
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.6) 15vw, rgba(255, 255, 255, 0.3) 30vw, rgba(255, 255, 255, 0) 50vw)";
  } else {
    navBar.classList.remove("sticky");
    navBarLogoContainer.style.display = "none";
    mainPageContent.style.paddingTop = "0";
    afterHeader.style.background =
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.6) 10vw, rgba(255, 255, 255, 0.3) 20vw, rgba(255, 255, 255, 0) 40vw)";
  }
};
