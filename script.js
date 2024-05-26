let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 600; 

    slides.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextSlide, 3000); 
