const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;
let isScrolling = false;

container.addEventListener("wheel", (event) => {
  if (isScrolling) return;

  if (event.deltaY > 0 && currentIndex < cards.length - 1) {
    currentIndex++;
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  } else {
    return;
  }

  isScrolling = true;
  updateCards();

  setTimeout(() => {
    isScrolling = false;
  }, 500);
});

function updateCards() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.transform = "translateY(0) scale(1)";
      card.style.opacity = "1";
      card.style.zIndex = "2";
    } else if (index < currentIndex) {
      card.style.transform = "translateY(-100%) scale(0.85)";
      card.style.opacity = "0.6";
      card.style.zIndex = "1";
    } else {
      card.style.transform = "translateY(100%) scale(0.85)";
      card.style.opacity = "0.6";
      card.style.zIndex = "1";
    }
  });
}

updateCards();
