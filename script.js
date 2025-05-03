const slidesArray = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentSlide = 0;
let numOfSlideChanges = 0;
let slideInterval =  setInterval(changeSlide, 10000); // Store interval ID so we can pause it

const leftGradient = "linear-gradient(to right,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
const bottomGradient = "linear-gradient(to top,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
  const slides = document.getElementById("slides")

  console.log(slides)
  
  slidesArray.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slide");
    slideElement.style.backgroundImage = `url(${slide})`;
    slideElement.style.backgroundSize = "cover";
    slideElement.style.backgroundPosition = "center";
    index === 0 ? slideElement.classList.add("change") : slideElement.style.display = "none"; // Hide all slides except the first
    slides.appendChild(slideElement);
  });


 // Change slide every 5 seconds






  const allSlides = document.querySelectorAll(".slide");
  console.log(allSlides[currentSlide]);



  function changeSlide() { 
    allSlides[currentSlide].classList.remove("change");
    allSlides[currentSlide].style.display = "none" // Hide current slide
    currentSlide = (currentSlide + 1) % allSlides.length; // Move to next slide
    allSlides[currentSlide].classList.add("change"); // Show next slide
    allSlides[currentSlide].style.display = "block"; // Show next slide
    console.log(`Current slide: ${currentSlide}`);
    numOfSlideChanges += 1;
    console.log(`Number of slide changes: ${numOfSlideChanges}`);
  };


  // slides.style.backgroundImage = `${leftGradient}, ${bottomGradient}, url(${slidesArray[currentSlide]})`;  
console.log(slideInterval)
  
  // Optional: pause on hover
  slides.addEventListener('mouseenter', pauseSlideshow);
  slides.addEventListener('mouseleave', resumeSlideshow);






function pauseSlideshow() {
  clearInterval(slideInterval); // stops it from running
  allSlides[currentSlide].classList.remove("change") 
  console.log("Slideshow paused");
}

function resumeSlideshow() {
  slideInterval = setInterval(changeSlide, 10000);
  console.log("Slideshow resumed");
}
