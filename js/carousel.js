const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Set initial slide positions
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Add event listener to next button
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    const amountToMove = nextSlide.offsetLeft;
    track.style.transform = `translateX(-${amountToMove}px)`;
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
  }
});

// Add event listener to prev button (you didn't have this implemented)
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    const amountToMove = prevSlide.offsetLeft;
    track.style.transform = `translateX(-${amountToMove}px)`;
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
  }
});

// Add event listener to dots navigation (you didn't have this implemented)
dots.forEach((dot, index) => {
  dot.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = slides[index];
    const amountToMove = targetSlide.offsetLeft;
    track.style.transform = `translateX(-${amountToMove}px)`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  });
});