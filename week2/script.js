document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const sliderContainer = document.querySelector('.slider-container');

    function changeSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides[currentIndex].classList.add('active');
        thumbnails[currentIndex].classList.add('active');
    }

    function showNextSlide() {
        changeSlide(currentIndex + 1);
    }

    function showPrevSlide() {
        changeSlide(currentIndex - 1);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', showPrevSlide);
        nextButton.addEventListener('click', showNextSlide);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            changeSlide(index);
            resetAutoSlide();
        });
    });

    let autoSlideInterval = setInterval(showNextSlide, 5000);

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(showNextSlide, 5000);
    }
});
