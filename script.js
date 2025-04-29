const slidesArray = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentSlide = 0;
let numOfSlideChanges = 0;
let slideInterval = null; // Store interval ID so we can pause it

const leftGradient = "linear-gradient(to right,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
const bottomGradient = "linear-gradient(to top,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";

window.onload = function() {
  const slides = document.querySelector(".slides");
  slides.style.backgroundImage = `${leftGradient}, ${bottomGradient}, url(${slidesArray[currentSlide]})`;  

  slides.classList.add("change");
  // Start the slideshow
  slideInterval = setInterval(changeSlide, 5000);
  
  // Optional: pause on hover
  slides.addEventListener('mouseenter', pauseSlideshow);
  slides.addEventListener('mouseleave', resumeSlideshow);
};

function changeSlide() {
  const slides = document.querySelector(".slides");
  currentSlide = (currentSlide + 1) % slidesArray.length;
  slides.style.backgroundImage = `${leftGradient}, ${bottomGradient}, url(${slidesArray[currentSlide]})`;
  console.log(`Current slide: ${currentSlide}`);
  numOfSlideChanges += 1;
  console.log(`Number of slide changes: ${numOfSlideChanges}`);
}

function pauseSlideshow() {
  clearInterval(slideInterval); // stops it from running
  const slides = document.querySelector(".slides");
  slides.classList.remove("change");
  console.log("Slideshow paused");
}

function resumeSlideshow() {
  slideInterval = setInterval(changeSlide, 5000);
  const slides = document.querySelector(".slides");
  slides.classList.add("change");
  console.log("Slideshow resumed");
}
