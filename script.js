/** @format */

// Make navbar sticky when user scrolls down
window.onscroll = function () {
  const programHeader = document.querySelector("#program-header");
  const navBar = document.querySelector("#nav-bar");
  const navBarLogoContainer = document.getElementById("nav-bar-logo-container");
  const mainPageContent = document.getElementById("main-page-content");
  const afterHeader = document.querySelector(".after-header");

  if (!programHeader || !navBar || !navBarLogoContainer || !mainPageContent || !afterHeader) {
    return;
  }

  let programHeaderBottom = programHeader.getBoundingClientRect().bottom;

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

document.addEventListener("DOMContentLoaded", function () {
  // Zoom the show logo in its container (home page only)
  var image = document.getElementById("showlogo");
  if (image) {
    image.classList.add("zoom-in");
  }

  // Photo slideshow (home page only)
  var slides = document.querySelectorAll(".photo");
  if (slides.length > 0) {
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
  }
});
