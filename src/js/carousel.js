const carouselItems = document.querySelectorAll(".carousel__item");
const nextBtn = document.querySelector("#carouselItemNext");
const prevBtn = document.querySelector("#carouselItemPrev");
const totalSlides = carouselItems.length;

let currentImage = 0;

prevBtn.addEventListener("click", (event) => moveSlide(-1));

nextBtn.addEventListener("click", (event) => moveSlide(1));

const tid = setInterval(() => moveSlide(1), 10000);

function moveSlide(num) {
    currentImage = (currentImage + num + totalSlides) % totalSlides;
    carouselItems.forEach((element) => {
        element.style.transform = `translateX(-${currentImage * 100}%)`;
    });
}
