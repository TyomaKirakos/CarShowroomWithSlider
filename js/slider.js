const images = ['granta.jpeg', 'largus.jpg', 'vesta.jpg'];
const sliderIMG = document.querySelector('.slider__img');
const leftArrow = document.getElementById('LArrow-slider');
const rightArrow = document.getElementById('RArrow-slider');
const dotsBlock = document.querySelector('.slider__dots-block');

let dots;
let currentSlide = 0;

// -----------------------slider-------------------

images.forEach((image, index) => {
    let newDot = document.createElement('div');
    newDot.classList = 'dots-block__dot';
    newDot.classList.add(`slider-dot${index}`)
    if (index == 0){
        newDot.classList.add('dots-block__dot-active');
    }
    dotsBlock.append(newDot);
});
dots = document.querySelectorAll('.dots-block__dot');

leftArrow.addEventListener('click', function(){
    currentSlide -= 1;
    if (currentSlide < 0){
        currentSlide = images.length - 1;
    }
    sliderIMG.src = `img/${images[currentSlide]}`;

    dots.forEach((dot) => {
        dot.classList.remove('dots-block__dot-active');
    })
    dots[currentSlide].classList.add('dots-block__dot-active');
})

rightArrow.addEventListener('click', function(){
    currentSlide += 1;
    if (currentSlide > images.length - 1){
        currentSlide = 0;
    }
    sliderIMG.src = `img/${images[currentSlide]}`;

    dots.forEach((dot) => {
        dot.classList.remove('dots-block__dot-active');
    })
    dots[currentSlide].classList.add('dots-block__dot-active');
})

dotsBlock.addEventListener('click', (e) => {
    if (e.target != dotsBlock){
        dots.forEach((dot) => {
            dot.classList.remove('dots-block__dot-active');
        })
        e.target.classList.add('dots-block__dot-active');
        currentSlide = e.target.classList[1][e.target.classList[1].length -1];
        sliderIMG.src = `img/${images[currentSlide]}`;
    }
})

let autoSlider = setInterval(() => {
    currentSlide += 1;
    if (currentSlide > images.length - 1){
        currentSlide = 0;
    }
    sliderIMG.src = `img/${images[currentSlide]}`;

    dots.forEach((dot) => {
        dot.classList.remove('dots-block__dot-active');
    })
    dots[currentSlide].classList.add('dots-block__dot-active');
}, 5000)
