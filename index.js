document.addEventListener("DOMContentLoaded", event => {
  let testimonials = document.getElementsByClassName('testimonial');
  let testimonialArray = Array.from(testimonials);

  let tempArray = Array.from(testimonials);
  let currentTestimonial = tempArray.shift();
  tempArray.forEach(eachTestimonial => {
    eachTestimonial.style.display = "none";
  });

  let next = document.getElementById("next");
  let previous = document.getElementById("previous");

  let count = 0;

  const goNext = () => {
    count ++;
    if(count == testimonialArray.length) {
      count = 0;
    }
    currentTestimonial.style.display = "none";
    currentTestimonial = testimonialArray[count];
    currentTestimonial.style.display = "block";
  };

  const goPrevious = () => {
    count --;
    if (count < 0) {
      count = testimonialArray.length - 1;
    }
    currentTestimonial.style.display = "none";
    currentTestimonial = testimonialArray[count];
    currentTestimonial.style.display = "block";
  };

  const timerInterval = 3000;

  const goNextWrapper = () => {
    clearInterval(timer);
    goNext();
    timer = setInterval(() => goNext(), timerInterval);
  }

  const goPreviousWrapper = () => {
    clearInterval(timer);
    goPrevious();
    timer = setInterval(() => goNext(), timerInterval);
  }

  let timer = setInterval(() => goNext(), timerInterval);

  next.addEventListener("click", goNextWrapper);
  previous.addEventListener("click", goPreviousWrapper);
});
