const slidesArray = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentSlide = 0;
let numOfSlideChanges = 0

const leftGradient = "linear-gradient(to right,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
const bottomGradient = "linear-gradient(to top,rgba(245, 243, 243, 1) 1%, rgba(255, 255, 255, 0) 50% , rgba(255, 255, 255, 0) 100%)";
window.onload = function() {
  const slides = document.querySelector(".slides")     
        slides.style.backgroundImage = `${leftGradient}, ${bottomGradient}, url(${slidesArray[currentSlide]})`;  
        slides.classList.add("change")
        
 

const slideShowInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % slidesArray.length;
  slides.style.backgroundImage = `${leftGradient}, ${bottomGradient}, url(${slidesArray[currentSlide]})`;
  slides.classList.add("change");
  console.log(`Current slide: ${currentSlide}`);
  numOfSlideChanges += 1;
  console.log(`Number of slide changes: ${numOfSlideChanges}`)
  

}, 10000); 


console.log(slideShowInterval)
}

