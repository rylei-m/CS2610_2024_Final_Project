
let slideIndex = 0;
showSlide(slideIndex); // Initialize the carousel at the first slide

function showSlide(index) {
    const slides = document.querySelector('.carousel-inner .slides');
    const totalSlides = slides.children.length;
    slideIndex = index;

    if (index >= totalSlides) {
        slideIndex = 0;  // Wrap around to the first slide
    } else if (index < 0) {
        slideIndex = totalSlides - 1;  // Wrap around to the last slide
    }

    // Move the slide container
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

