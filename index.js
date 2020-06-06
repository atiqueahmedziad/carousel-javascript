// Ziad Product Carousel

document.addEventListener("DOMContentLoaded", event => {
  const itemClassName = "carousel-product";
  let items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  const concernSubHeading = document.querySelectorAll('.subheading-concern .no-slider-item');
  const concernProducts = document.querySelectorAll('.products-concern .no-slider-item');
  const priceProduct = document.querySelectorAll('.price-carousel-product .no-slider-item');
  const learnHow = document.querySelectorAll('.learn-how-link .no-slider-item');
  const subHeadingClsName = 'no-slider-item';

  function setInitialClasses() {
    learnHow[totalItems - 1].classList.add("previous-product");
    learnHow[0].classList.add("initial");
    learnHow[0].classList.add("active");
    learnHow[1].classList.add("next-product");

    priceProduct[totalItems - 1].classList.add("previous-product");
    priceProduct[0].classList.add("initial");
    priceProduct[0].classList.add("active");
    priceProduct[1].classList.add("next-product");

    concernProducts[totalItems - 1].classList.add("previous-product");
    concernProducts[0].classList.add("initial");
    concernProducts[0].classList.add("active");
    concernProducts[1].classList.add("next-product");

    concernSubHeading[totalItems - 1].classList.add("previous-product");
    concernSubHeading[0].classList.add("initial");
    concernSubHeading[0].classList.add("active");
    concernSubHeading[1].classList.add("next-product");

    items[totalItems - 1].classList.add("previous-product");
    items[0].classList.add("initial");
    items[0].classList.add("active");
    items[1].classList.add("next-product");
  }

  function setEventListeners() {
    const next = document.getElementById('carousel-button-next'),
        prev = document.getElementById('carousel-button-prev');

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function disableInteraction() {
    moving = true;

    setTimeout(function(){
      moving = false
    }, 500);
  }

  function moveCarouselTo(slide) {
    if(!moving) {
      disableInteraction();
      let newPrevious = slide - 1,
      newNext = slide + 1;

      if(newNext === totalItems) {
        newNext = 0;
      }

      if(newPrevious < 0) {
        newPrevious = totalItems - 1;
      }

      learnHow[newPrevious].className = subHeadingClsName + " previous-product";
      learnHow[slide].className = subHeadingClsName + " active";
      learnHow[newNext].className = subHeadingClsName + " next-product";

      priceProduct[newPrevious].className = subHeadingClsName + " previous-product";
      priceProduct[slide].className = subHeadingClsName + " active";
      priceProduct[newNext].className = subHeadingClsName + " next-product";

      concernProducts[newPrevious].className = subHeadingClsName + " previous-product";
      concernProducts[slide].className = subHeadingClsName + " active";
      concernProducts[newNext].className = subHeadingClsName + " next-product";

      concernSubHeading[newPrevious].className = subHeadingClsName + " previous-product";
      concernSubHeading[slide].className = subHeadingClsName + " active";
      concernSubHeading[newNext].className = subHeadingClsName + " next-product";

      items[newPrevious].className = itemClassName + " previous-product";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next-product";
    }
  }

  function moveNext() {
    if (!moving) {
      slide++;
      if(slide === totalItems) {
        slide = 0;
      }
      moveCarouselTo(slide);
    }
  }

  function movePrev() {
    if (!moving) {
      slide--;
      if (slide < 0) {
        slide = totalItems - 1;
      }
      moveCarouselTo(slide);
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    moving = false;
  }

  initCarousel();
});