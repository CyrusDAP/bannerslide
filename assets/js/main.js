const slideContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval;

function moveSlides(direction) {
    const slideWidth = slides[0].clientWidth;
    if (direction === "left") {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    } else if (direction === "right") {
        currentSlide = (currentSlide + 1) % slides.length;
        slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlides("right");
    }, 10000); // 10seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", function () {
    startSlideShow();
});