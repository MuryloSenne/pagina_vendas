const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function showCard(index) {
  const offset = index * cards[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

setInterval(nextCard, 8000); // Alterna para o próximo card a cada 3 segundos
