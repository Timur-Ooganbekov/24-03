
let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("tabcontent");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
showSlides();

const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__close')

setTimeout(function() {
    modal.style.display = "block";
}, 10000);


window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        document.querySelector('.modal').style.display = 'block';
    }
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

