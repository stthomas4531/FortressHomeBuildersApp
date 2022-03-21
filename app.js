//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//////////////////////////////////////////

// PORTFOLIO CAROUSEL
// const track = document.querySelector('.carousel__track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
// const nav = document.querySelector('.carousel__nav');
// const dots = Array.from(nav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// Arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// };
// slides.forEach(setSlidePosition);

// if you are using a classList NO dot ( . )
// if you are using a querySelector you need the dot


// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
// };

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// };

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// };

// When I click left, move slides to the left
// prevButton.addEventListener('click', e => {
//     const  currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = nav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex);
// });

// When I click right, move slides to the right
// nextButton.addEventListener('click', e => {
//     const  currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = nav.querySelector('.current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);

// });

// When I click the nav indicators, move to that slide
nav.addEventListener('click', e => {
    // What indicator was clicked on?
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = nav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});