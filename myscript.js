var currentSlide = 0;
var slides = document.querySelectorAll("#slideshow img");
var slideCount = slides.length;

function gantiSlideKinari() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].style.opacity = 1;
}

setInterval(gantiSlideKinari, 5500); // Waktu delay dalam milidetik (3 detik dalam contoh ini)