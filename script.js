// let slides = [
//   {
//     title: "Cave Of Forgotten Dreams",
//     image: "img1.jpg"
//   },
//   {
//     title: "The Mountain in the Infinite distance",
//     image: "img2.jpg"
//   },
//   {
//     title: "Whispers of the Ancients",
//     image: "img3.jpg"
//   }
// ]

const mySlides = [];
let index = 0;

function Slides(title, image) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.image = image;
  this.sayTitle = function() {
    console.log(this.title);
  };
}

function addSlide(title, image){
  const newSlide = new Slides(title, image);
  mySlides.push(newSlide);

  newSlide.sayTitle();
}

addSlide("Cave Of Forgotten Dreams", "img1.jpg");
addSlide("The Mountain in the Infinite distance", "img2.jpg");
addSlide("Whispers of the Ancients", "img3.jpg");

console.log(mySlides);

function displaySlides(){
  const slideContainer = document.getElementById('slideContainer');
  slideContainer.innerHTML = " ";

    const slideElement = document.createElement("div")
}