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

for (let i = 0; i < length; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = 'transparent';
  });
};

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 450}px)`;
    button.style.backgroundColor = 'white';
    slideNumber = i + 1;
  });
});

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

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = 'white';
};

right.addEventListener('click', () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener('click', () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
