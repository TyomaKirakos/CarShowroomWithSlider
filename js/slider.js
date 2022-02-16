const images = ['granta.jpeg', 'largus.jpg', 'vesta.jpg'];
// const sliderBlock = document.querySelector('.slider');
const sliderIMG = document.querySelector('.slider__img');
const leftArrow = document.getElementById('LArrow-slider');
const rightArrow = document.getElementById('RArrow-slider');
const dotsBlock = document.querySelector('.slider__dots-block');

let opacityCount;
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
    goingBack();
})

rightArrow.addEventListener('click', function(){
    goingForward();
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
    goingForward();
}, 2000)

// Функции

function changingPicture(slideNumber){
    sliderIMG.src = `img/${images[slideNumber]}`;

    dots.forEach((dot) => {
        dot.classList.remove('dots-block__dot-active');
    })
    dots[slideNumber].classList.add('dots-block__dot-active');
}

function goingForward(){
    currentSlide += 1;
    if (currentSlide > images.length - 1){
        currentSlide = 0;
    }
    changingPicture(currentSlide)
}

function goingBack(){
    currentSlide -= 1;
    if (currentSlide < 0){
        currentSlide = images.length - 1;
    }
    changingPicture(currentSlide);
}