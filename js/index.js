const imageLinks = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
];
const imgPath = "./images/";
var slideIndex = 0;
function startImageSlide() {
  document.slideImg.src = imgPath + imageLinks[slideIndex];
  slideIndex++;
  if (slideIndex > imageLinks.length - 1) {
    slideIndex = 0;
  }
  setTimeout("startImageSlide()", 3000);
  return;
}
function previousSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = imageLinks.length - 1;
  }
  document.slideImg.src = imgPath + imageLinks[slideIndex];
}
function nextSlide() {
  if (slideIndex < imageLinks.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  document.slideImg.src = imgPath + imageLinks[slideIndex];
}

startImageSlide();
