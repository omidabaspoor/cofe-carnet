document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('serviceSearchInput');
    const serviceCards = document.querySelectorAll('.service-card');
    const categories = document.querySelectorAll('.service-category');
    const noResultsMessage = document.getElementById('no-results');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let visibleCardsCount = 0;

            // Filter service cards
            serviceCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'flex';
                    visibleCardsCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide or show categories based on visible cards
            categories.forEach(category => {
                const visibleCardsInCategory = category.querySelectorAll('.service-card[style*="display: flex"]');
                if (visibleCardsInCategory.length > 0) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });

            // Show or hide the "no results" message
            if (visibleCardsCount === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        });
    }
    
    // Animate on load functionality (optional, but good for consistency)
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });


});
// --- FINAL ATTEMPT: Direct Control Mobile Navigation ---
console.log('Mobile menu script loaded.'); // For debugging

const navToggle = document.querySelector('.mobile-nav-toggle');
// Find the navigation menu that is a sibling of the button
const primaryNav = navToggle ? navToggle.previousElementSibling : null;

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        console.log('Toggle button clicked!'); // For debugging
        
        // Toggle the 'is-active' class directly on the nav menu
        primaryNav.classList.toggle('is-active');
        
        // Update the button's aria-expanded state for accessibility
        const isActive = primaryNav.classList.contains('is-active');
        navToggle.setAttribute('aria-expanded', isActive);
    });
} else {
    console.error('Mobile nav toggle button or the navigation menu next to it was not found!');
}
