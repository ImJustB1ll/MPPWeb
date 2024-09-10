const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button-right');
const prevButton = document.querySelector('.carousel_button-left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Samping sampingan

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Left go to Left


// Right go to Right
nextButton.addEventListener('click', e => {
    
    const currentSlide = track.querySelector('current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    // Move to next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';

})

// Click, move to active