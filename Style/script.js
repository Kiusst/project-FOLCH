let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel1-item');
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  const offset = -currentIndex * 100;
  document.querySelector('.carousel1-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);