const carouselContainer = document.getElementById('carouselContainer');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
let currentIndex = 0;

function updateCarousel() {
    const cardsToShow = window.innerWidth <= 600 ? 1 : 3; // Show 1 card on mobile, 3 on larger screens
    const offset = -currentIndex * (100 / cardsToShow); // Calculate percentage offset
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    const cardsToShow = window.innerWidth <= 600 ? 1 : 3;
    currentIndex = (currentIndex + 1) % Math.ceil(totalCards / cardsToShow);
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    const cardsToShow = window.innerWidth <= 600 ? 1 : 3;
    currentIndex = (currentIndex - 1 + Math.ceil(totalCards / cardsToShow)) % Math.ceil(totalCards / cardsToShow);
    updateCarousel();
});

// Initial update
updateCarousel();

// Update carousel on window resize
window.addEventListener('resize', () => {
    // Update carousel only if on desktop
    if (window.innerWidth > 600) {
        updateCarousel();
    } else {
        // Reset to the first card when switching to mobile view
        currentIndex = 0;
        carouselContainer.style.transform = 'translateX(0%)';
    }
});