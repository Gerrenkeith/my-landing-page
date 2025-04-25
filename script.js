const slidesArray = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentSlide = 0;
let numOfSlideChanges = 0

window.onload = function() {
  const slides = document.querySelector(".slides")      
        slides.style.backgroundImage = `url(${slidesArray[currentSlide]})`;  
        slides.classList.add("change")
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slidesArray.length;
    slides.style.backgroundImage = `url(${slidesArray[currentSlide]})`;
    slides.classList.add("change");
    console.log(`Current slide: ${currentSlide}`);
    numOfSlideChanges += 1;
    console.log(`Number of slide changes: ${numOfSlideChanges}`)
    
  }
, 10000); 

}

