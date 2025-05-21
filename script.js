const slidesArray = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentSlide = 0;
let currentDot = 0
let numOfSlideChanges = 0;
// Store interval ID so we can pause it

const leftGradient = "linear-gradient(to right,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
const bottomGradient = "linear-gradient(to top,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
const slides = document.getElementById("slides")
const dots = document.getElementById("dots")
  console.log(slides)
  
slidesArray.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    const headone = document.createElement("h1");
    const span = document.createElement("span");

    slideElement.classList.add("slide");
    // slideElement.style.backgroundImage = `url(${slide})`;
    // slideElement.style.backgroundSize = "cover";
    headone.textContent = `Slide ${index + 1}`;
    slideElement.appendChild(headone);
    slideElement.style.backgroundColor = "lightblue";
    slideElement.style.backgroundPosition = "center";
    index === 0 ? slideElement.classList.add("change") : slideElement.style.display = "none"; // Hide all slides except the first
    slides.appendChild(slideElement);

    span.classList.add("dot");
    span.style.fontSize = "30px";
    index === 0 ? span.classList.add("live") : null; // Add "live" class to the first dot
    span.id = index;
    dots.appendChild(span);
  });

 // Change slide every 5 seconds

const allSlides = document.querySelectorAll(".slide");
const allDots = document.querySelectorAll(".dot");
console.log(allSlides);

let slideInterval =  setInterval(() =>nextSlide(), 10000); // Change slide every 10 seconds

function nextSlide() { 
    console.log(currentSlide)
    allSlides[currentSlide].classList.remove("change");
    allSlides[currentSlide].style.display = "none" // Hide current slide
    currentSlide = (currentSlide + 1) % allSlides.length; // Move to next slide
    allSlides[currentSlide].classList.add("change"); // Show next slide
    allSlides[currentSlide].style.display = "block"; // Show next slide
    console.log(`Current slide: ${currentSlide}`);
    numOfSlideChanges += 1;
    console.log(`Number of slide changes: ${numOfSlideChanges}`);

    allDots[currentDot].classList.remove("live");
    currentDot = (currentDot + 1) % allDots.length; // Move to next dot
    allDots[currentDot].classList.add("live"); // Show next dot
    
  };// Show next slide

  function prevSlide() {
    console.log(currentSlide)
    allSlides[currentSlide].classList.remove("change");
    allSlides[currentSlide].style.display = "none" // Hide current slide
    currentSlide = (currentSlide - 1 + allSlides.length) % allSlides.length; // Move to next slide
    allSlides[currentSlide].classList.add("change"); // Show next slide
    allSlides[currentSlide].style.display = "block"; // Show next slide
    console.log(`Current slide: ${currentSlide}`);

    allDots[currentDot].classList.remove("live");
    currentDot = (currentDot - 1 + allDots.length) % allDots.length; // Move to next dot
    allDots[currentDot].classList.add("live");
  };// Show previous slide

console.log(slideInterval)
  
  // Optional: pause on hover
slides.addEventListener('mouseenter', pauseSlideshow); // Pause slideshow on hover
slides.addEventListener('mouseleave', resumeSlideshow);// Resume slideshow when not hovering

const leftButton = document.getElementById("prev");
const rightButton = document.getElementById("next");

leftButton.addEventListener("click", () => {
  clearInterval(slideInterval); // stops it from running 
  })

rightButton.addEventListener("click", () => {
clearInterval(slideInterval); // stops it from running 
  })

leftButton.addEventListener("click", () => prevSlide());
rightButton.addEventListener("click", () => nextSlide());

function pauseSlideshow() {
  clearInterval(slideInterval); // stops it from running
  allSlides[currentSlide].classList.remove("change") 
  console.log("Slideshow paused");
}

function resumeSlideshow() {
  slideInterval = setInterval(nextSlide, 10000);
  console.log("Slideshow resumed");
}

function goToSlide() { 
  allSlides[currentSlide].classList.remove("change");
  allSlides[currentSlide].style.display = "none" // Hide current slide
  currentSlide = this.id; // Move to next slide
  allSlides[currentSlide].classList.add("change"); // Show next slide
  allSlides[currentSlide].style.display = "block"; // Show next slide
  console.log(`Current slide: ${currentSlide}`);
  
  allDots[currentDot].classList.remove("live");
  currentDot = this.id; // Move to next dot
  allDots[currentDot].classList.add("live"); // Show next dot
}

allDots.forEach((dot) => {
  dot.addEventListener("click", goToSlide);
});