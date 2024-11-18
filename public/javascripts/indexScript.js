const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".accordion-icon");

    content.classList.toggle("active");

    icon.style.transform = content.classList.contains("active")
      ? "rotate(180deg)"
      : "rotate(0)";

    document.querySelectorAll(".accordion-content").forEach((otherContent) => {
      if (
        otherContent !== content &&
        otherContent.classList.contains("active")
      ) {
        otherContent.classList.remove("active");
        otherContent.previousElementSibling.querySelector(
          ".accordion-icon"
        ).style.transform = "rotate(0)";
      }
    });
  });
});

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const arrow = button.querySelector(".arrow-icon");

    answer.classList.toggle("active");
    arrow.classList.toggle("active");

    faqButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        const otherAnswer = otherButton.nextElementSibling;
        const otherArrow = otherButton.querySelector(".arrow-icon");
        otherAnswer.classList.remove("active");
        otherArrow.classList.remove("active");
      }
    });
  });
});
