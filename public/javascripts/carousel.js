

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;

  function showSlide(index) {
    const carousel = window.innerWidth >= 1024
      ? document.getElementById("desktopCarousel")
      : document.getElementById("mobileCarousel");
  
    const slides = carousel.children.length;
    currentSlide = (index + slides) % slides;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(() => {
    nextSlide();
  }, 2000);

  window.addEventListener("resize", () => showSlide(currentSlide));
});