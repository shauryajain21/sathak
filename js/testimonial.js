// vars
'use strict'


var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.
    getElementById('right-arrow')
    .addEventListener("click", function () {

        plusSlides(1);
    });
document.
    getElementById('left-arrow')
    .addEventListener("click", function () {
        plusSlides(-1);
    });

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("dot");
    if (n === slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let slide of slides) {
        // console.log(slide);
        slide.classList.remove('active');
        slide.classList.add('hiddan');
    }

    slides[slideIndex].classList.add('active');
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}


var slideInd = 0;
showSlideshow();

async function showSlideshow() {
    var i;
    var slideshow = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("dot");


    if (slideInd >= slideshow.length) { slideInd = 0; }
    if (slideInd < 0) { slideInd = slideshow.length - 1 }
    for (let slide of slideshow) {

        slide.classList.remove('active');
        slide.classList.add('hiddan');
    }

    slideshow[slideInd].classList.add('active');

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideInd].className += " active";
    slideInd++;
    setTimeout(showSlideshow, 5000);


}
