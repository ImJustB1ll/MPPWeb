const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button-right');
const prevButton = document.querySelector('.carousel_button-left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Samping sampingan
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Click, move to active
dotsNav?.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    // Clear the interval when a dot is clicked
    clearInterval(slideInterval);
    slideInterval = null;

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    // Restart automatic sliding after 3 seconds
    setTimeout(() => {
        startSlideInterval();
    }, 3000);
});

// Add automatic sliding
let isAutomatic = true; // initial state: automatic sliding
let slideInterval;

const startSlideInterval = () => {
    if (!isAutomatic) return; // don't start the timer if manual mode is active
    slideInterval = setInterval(() => {
        const currentSlide = track.querySelector('.current-slide');
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const nextIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[nextIndex];
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(dotsNav.querySelector('.current-slide'), dots[nextIndex]);
    }, 3000); // slide every 3 seconds
};

startSlideInterval();