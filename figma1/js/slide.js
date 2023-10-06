const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.card-slide');
let currentIndex = 1;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.transform = `translateX(${50 * (i - index)}%)`;
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

showCard(currentIndex);
//dots start
$(".dot1").click(function() {
    currentSlide(1);
    });
    $(".dot2").click(function() {
    currentSlide(2);
    });
    $(".dot3").click(function() {
    currentSlide(3);
    });
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    //dots end
    function showSlides(n) {
        var i;
        var slides = $(".card-slide");
        var dots = $(".dot");
        if (n > slides.length) {
        slideIndex = 1;
        }
        if (n < 1) {
        slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
        }
        for (var i = 0; i < dots.length; i++) {
        dots[i].className.replace("active", "");
        dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        }
    //carousel start
var slideIndex = 1;
showSlides(slideIndex);
//Next and previous buttons start
$(".prev-slide").click(function() {
plusSlides(-1);
});
$(".next-slide").click(function() {
plusSlides(1);
});
function plusSlides(n) {
showSlides(slideIndex += n);
}
//Next and previous buttons end
