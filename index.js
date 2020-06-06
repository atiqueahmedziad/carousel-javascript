// Ziad Product Carousel

const content = [
  {
    concern: 'ACNE/WHITE & BLACKHEADS',
    product: 'Perfec-Tone Clear & Spotless Set - Clarifying Gel, Resurfacing Creme, & Revitalazing Serum',
    priceStrike: '$165.97',
    price: '$141.00',
    productLink: '#1'
  },
  {
    concern: 'BLACKHEADS & ACNE/WHITE',
    product: 'Resurfacing Creme, & Revitalazing Serum, Perfec-Tone Clear & Spotless Set - Clarifying Gel',
    priceStrike: '$335.97',
    price: '$232.00',
    productLink: '#2'
  },
  {
    concern: 'Lorem ipsum dolor sit ame',
    product: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    priceStrike: '$535.97',
    price: '$421.00',
    productLink: '#3'
  },
];

document.addEventListener("DOMContentLoaded", event => {
  const itemClassName = "carousel-product";
  let items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  let currentContent = content[slide];
  const concernSubHeading = document.getElementById('subheading-concern');
  const productSubHeading = document.getElementById('subheading-product');
  const priceStrike = document.getElementById('price-strike');
  const price = document.getElementById('price');
  const learnMoreLink = document.getElementById('learn-how-btn');

  function setInitialClasses() {
    concernSubHeading.textContent = currentContent.concern;
    productSubHeading.textContent = currentContent.product;
    priceStrike.textContent = currentContent.priceStrike;
    price.textContent = currentContent.price;
    learnMoreLink.href = currentContent.productLink;

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

      currentContent = content[slide];
      concernSubHeading.textContent = currentContent.concern;
      productSubHeading.textContent = currentContent.product;
      priceStrike.textContent = currentContent.priceStrike;
      price.textContent = currentContent.price;
      learnMoreLink.href = currentContent.productLink;

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