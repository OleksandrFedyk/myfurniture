const left = document.getElementById('btn-left'),
      right = document.getElementById('btn-right'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    console.log(n);
    for(slide  of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

right.addEventListener('click', nextSlide);
left.addEventListener('click', prevSlide);