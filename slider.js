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
const bottom = document.querySelector('.bottom');

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

for (let i = 0; i < length; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';
