document.addEventListener('DOMContentLoaded', () => {
    
    // --- Definitive Overlay Mobile Navigation ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav__close-btn');
    const bodyEl = document.body;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    function openMenu() {
        navToggle.setAttribute('aria-expanded', 'true');
        mobileNavOverlay.setAttribute('data-visible', 'true');
        bodyEl.classList.add('nav-is-open');
    }

    function closeMenu() {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNavOverlay.setAttribute('data-visible', 'false');
        bodyEl.classList.remove('nav-is-open');
    }

    if (navToggle && mobileNavOverlay && closeBtn) {
        navToggle.addEventListener('click', () => {
            const isVisible = mobileNavOverlay.getAttribute('data-visible') === 'true';
            if (isVisible) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        closeBtn.addEventListener('click', closeMenu);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    
    // --- CORRECTED & RE-ADDED: Chat Widget Functionality ---
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
        const chatButton = chatWidget.querySelector('.chat-widget__button');
        const closeChatButton = chatWidget.querySelector('.chat-widget__close-btn');
        const messagesContainer = chatWidget.querySelector('.chat-widget__messages');
        const chatForm = chatWidget.querySelector('.chat-widget__input-form');
        const chatInput = chatWidget.querySelector('.chat-widget__input');

        if (chatButton && closeChatButton && chatForm) {
            // Event listener for the main chat button to open/close the window
            chatButton.addEventListener('click', () => {
                chatWidget.classList.toggle('is-open');
            });
            
            // Event listener for the 'X' button inside the chat window to close it
            closeChatButton.addEventListener('click', () => {
                chatWidget.classList.remove('is-open');
            });
            
            // Event listener for submitting a message
            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const userInput = chatInput.value.trim();
                if (userInput) {
                    const addMessage = (text, sender) => {
                        if (!messagesContainer) return;
                        const messageElement = document.createElement('div');
                        messageElement.classList.add('message', `message--${sender}`);
                        messageElement.textContent = text;
                        messagesContainer.appendChild(messageElement);
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    };
                    addMessage(userInput, 'user');
                    chatInput.value = '';
                    setTimeout(() => {
                        addMessage('پیام شما دریافت شد. اپراتورهای ما به زودی پاسخ خواهند داد.', 'support');
                    }, 1500);
                }
            });
        }
    }

    // --- Scroll Animation Functionality ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
});
// --- ELEGANT OVERLAY: Mobile Navigation Functionality ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Definitive Overlay Mobile Navigation ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav__close-btn');
    const bodyEl = document.body;
    // NEW: Select all the links inside the mobile menu
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    function openMenu() {
        navToggle.setAttribute('aria-expanded', 'true');
        mobileNavOverlay.setAttribute('data-visible', 'true');
        bodyEl.classList.add('nav-is-open');
    }

    function closeMenu() {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNavOverlay.setAttribute('data-visible', 'false');
        bodyEl.classList.remove('nav-is-open');
    }

    if (navToggle && mobileNavOverlay && closeBtn) {
        navToggle.addEventListener('click', () => {
            const isVisible = mobileNavOverlay.getAttribute('data-visible') === 'true';
            if (isVisible) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        closeBtn.addEventListener('click', closeMenu);

        // NEW: Add event listeners to all mobile nav links to close the menu on click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    
    // --- Chat Widget Functionality ---
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
        const chatButton = chatWidget.querySelector('.chat-widget__button');
        const closeChatButton = chatWidget.querySelector('.chat-widget__close-btn');
        const messagesContainer = chatWidget.querySelector('.chat-widget__messages');
        const chatForm = chatWidget.querySelector('.chat-widget__input-form');
        const chatInput = chatWidget.querySelector('.chat-widget__input');

        if (chatButton && closeChatButton && chatForm) {
            chatButton.addEventListener('click', () => chatWidget.classList.toggle('is-open'));
            closeChatButton.addEventListener('click', () => chatWidget.classList.remove('is-open'));
            chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const userInput = chatInput.value.trim();
                if (userInput) {
                    const addMessage = (text, sender) => {
                        if (!messagesContainer) return;
                        const messageElement = document.createElement('div');
                        messageElement.classList.add('message', `message--${sender}`);
                        messageElement.textContent = text;
                        messagesContainer.appendChild(messageElement);
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    };
                    addMessage(userInput, 'user');
                    chatInput.value = '';
                    setTimeout(() => addMessage('پیام شما دریافت شد.', 'support'), 1500);
                }
            });
        }
    }

    // --- Scroll Animation Functionality ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
});




