// Ziad Product Carousel

document.addEventListener("DOMContentLoaded", event => {
  const itemClassName = "single-product-slider";
  let items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true,
    indicatorWrapper = document.getElementById('slider-indicator-wrapper');

  for(let i=0; i<totalItems; i++) {
    indicatorWrapper.insertAdjacentHTML('beforeend', `<div id=${i} class="slider-pointer"></div>`);
  }

  const indicators = document.getElementsByClassName('slider-pointer');
  console.log(indicators);
  const indicatorsArray = Array.from(indicators);
  indicatorsArray.forEach(indicator => {
    indicator.addEventListener('click', (e)=> {
      e.preventDefault();
      moveToSlide(Number(indicator.id));
    });
  });

  function setInitialClasses() {
    indicators[0].classList.add('active-slider');
    items[0].classList.add("active");
  }

  function setEventListeners() {
    const next = document.getElementById('product-slider-btn-next'),
        prev = document.getElementById('product-slider-btn-prev');

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function disableInteraction() {
    moving = true;

    setTimeout(function(){
      moving = false
    }, 500);
  }

  function moveCarouselTo(toSlide, prev) {
    if(!moving) {
      disableInteraction();
      clearInterval(timer);

      slide = toSlide;

      indicators[prev].classList.remove('active-slider');
      indicators[toSlide].classList.add('active-slider');
      items[toSlide].classList.add('active');
      items[prev].classList.remove('active');
      timer = setInterval(() => moveNext(), timerInterval);
    }
  }

  function moveToSlide(toSlide) {
    moveCarouselTo(toSlide, slide);
  }

  function moveNext() {
    if (!moving) {
      const prev = slide;
      slide++;
      if(slide === totalItems) {
        slide = 0;
      }
      moveCarouselTo(slide, prev);
    }
  }

  function movePrev() {
    if (!moving) {
      const prev = slide;
      slide--;
      if (slide < 0) {
        slide = totalItems - 1;
      }
      moveCarouselTo(slide, prev);
    }
  }

  let timer;

  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    timer = setInterval(() => moveNext(), timerInterval);
    moving = false;
  }

  let isDown = false;
  const slider = document.querySelector('.product-slider-list');
  let startX;
  let scrollLeft;
  const screenWidth = window.screen.width;
  let dragValue = 350;

  if(screenWidth < 950) {
    dragValue = 180;
  }
  else if(screenWidth < 500) {
    dragValue = 100;
  }

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('super-active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('super-active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('super-active');
  });

  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX)*3;
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
    if(walk > dragValue) {
      movePrev();
    }
    else if(walk < -dragValue) {
      moveNext();
    }
  });

  const timerInterval = 3000;

  initCarousel();
});