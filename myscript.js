var currentSlide = 0;
var currentSlideCoffe = 0;
var slideIndex = 0;
// SlideShow PagesSecondImage
var slides = document.querySelectorAll("#slideshow img");
var slideCount = slides.length;
// SlideShow PagesThirdImage
var slidesCoffee = document.querySelectorAll("#slideshowCoffee img");
var slideCountCoffee = slidesCoffee.length;



function gantiSlideKinari() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].style.opacity = 1;
}

function gantiSlideCoffee() {
    slidesCoffee[currentSlideCoffe].style.opacity = 0;
    currentSlideCoffe = (currentSlideCoffe + 1) % slideCountCoffee;
    slidesCoffee[currentSlideCoffe].style.opacity = 1;
}


setInterval(gantiSlideKinari, 5500);
setInterval(gantiSlideCoffee, 5500);
