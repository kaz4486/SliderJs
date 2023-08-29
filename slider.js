{
  /* <div class="button"></div>
<div class="button"></div>
<div class="button"></div>
<div class="button"></div> */
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 450}px)`;
  slideNumber++;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0)`;
  slideNumber = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 450}px )`;
  slideNumber = length;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 450}px)`;
  slideNumber--;
};

right.addEventListener('click', () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
});

left.addEventListener('click', () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
});
