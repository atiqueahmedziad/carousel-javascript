document.addEventListener("DOMContentLoaded", event => {
  const itemClassName = "carousel-product";
  let items = document.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = true;

  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
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

      var newPrevious = slide - 1,
      newNext = slide + 1;

      if(newNext === totalItems) {
        newNext = 0;
      }

      if(newPrevious < 0) {
        newPrevious = totalItems - 1;
      }

      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
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