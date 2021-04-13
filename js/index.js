const imageLinks = [
  "img1.jpg",
  "img2.jpg",
  "img3.JPG",
  "img4.JPG",
  "img5.JPG",
  "img6.JPG",
  "img7.JPG",
  "img8.JPG",
  "img9.JPG",
  "img10.JPG",
  "img11.JPG",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
];
const imgPath = "./images/";
const slideContainer = document.getElementById("slide-img");
var slideIndex = 0;
function startImageSlide() {
  slideContainer.style.backgroundImage = `url(${
    imgPath + imageLinks[slideIndex]
  })`;

  // document.slideImg.src = imgPath + imageLinks[slideIndex];
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
  slideContainer.style.backgroundImage = `url(${
    imgPath + imageLinks[slideIndex]
  })`;
}
function nextSlide() {
  if (slideIndex < imageLinks.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  slideContainer.style.backgroundImage = `url(${
    imgPath + imageLinks[slideIndex]
  })`;
}

startImageSlide();
