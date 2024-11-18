function animateCounter(id, target) {
  let count = 0;
  const increment = target / 100;
  const counter = document.getElementById(id);
  const updateCounter = setInterval(() => {
    count += increment;
    if (count >= target) {
      clearInterval(updateCounter);
      counter.innerText = target;
    } else {
      counter.innerText = Math.ceil(count);
    }
  }, 1);
}

let hasAnimated = false;

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("scroll", () => {
  const statsSection = document.querySelector("section.bg-red-900");

  if (isInViewport(statsSection) && !hasAnimated) {
    animateCounter("counter1", 10);
    animateCounter("counter2", 20);
    animateCounter("counter3", 50);
    animateCounter("counter4", 10);
    animateCounter("counter5", 5);
    animateCounter("counter6", 19);

    hasAnimated = true;
  }
});
