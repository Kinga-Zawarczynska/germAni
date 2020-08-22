export class Slider {

    constructor() {
        this.slideIndex = 1;
        this.autoSlideIndex = 0;
        this.timeOut;
        this.wrapper = document.querySelector(".wrapper");

        this.manualSlides;
        this.autoSlides;
        this.plusSlides;
        this.currentSlide;
        wrapper.addEventListener("mouseenter", manualSlides);
        wrapper.addEventListener("mouseleave", autoSlides);
    }



    // manualSlides(slideIndex);

    plusSlides(n) {
        manualSlides((slideIndex += n));
    }

    currentSlide(n) {
        manualSlides((slideIndex = n));
    }

    manualSlides(n) {
        clearTimeout(timeOut);
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // autoSlides(autoSlideIndex);

    autoSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        autoSlideIndex++;
        if (autoSlideIndex > slides.length) {
            autoSlideIndex = 1;
        }
        slides[autoSlideIndex - 1].style.display = "block";
        clearTimeout(timeOut);
        timeOut = setTimeout(autoSlides, 3000);
    }
}