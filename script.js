document.addEventListener('DOMContentLoaded', () => {

    // --- Chat Widget Functionality ---
    const chatWidget = document.querySelector('.chat-widget');
    const chatButton = document.querySelector('.chat-widget__button');
    const closeChatButton = document.querySelector('.chat-widget__close-btn');
    const messagesContainer = document.querySelector('.chat-widget__messages');
    const chatForm = document.querySelector('.chat-widget__input-form');
    const chatInput = document.querySelector('.chat-widget__input');

    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `message--${sender}`);
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    if (chatWidget && chatButton && closeChatButton && chatForm) {
        chatButton.addEventListener('click', () => {
            chatWidget.classList.toggle('is-open');
            if (chatWidget.classList.contains('is-open') && messagesContainer.children.length === 0) {
                setTimeout(() => {
                    addMessage('سلام! به پشتیبانی آنلاین کارنت خوش آمدید. چطور میتونم کمکتون کنم؟', 'support');
                }, 500);
            }
        });

        closeChatButton.addEventListener('click', () => {
            chatWidget.classList.remove('is-open');
        });

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();
            
            if (userInput) {
                addMessage(userInput, 'user');
                chatInput.value = '';

                setTimeout(() => {
                    addMessage('پیام شما دریافت شد. اپراتورهای ما به زودی پاسخ خواهند داد. از صبر شما سپاسگزاریم.', 'support');
                }, 1500);
            }
        });
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

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});


