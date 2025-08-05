document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. منوی موبایل (روش Overlay نهایی) ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav__close-btn');
    const bodyEl = document.body;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // تابع برای باز کردن منو
    function openMenu() {
        if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
        if (mobileNavOverlay) mobileNavOverlay.setAttribute('data-visible', 'true');
        if (bodyEl) bodyEl.classList.add('nav-is-open');
    }

    // تابع برای بستن منو
    function closeMenu() {
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        if (mobileNavOverlay) mobileNavOverlay.setAttribute('data-visible', 'false');
        if (bodyEl) bodyEl.classList.remove('nav-is-open');
    }

    // اطمینان از وجود عناصر قبل از افزودن event listener ها
    if (navToggle && mobileNavOverlay && closeBtn) {
        // باز و بسته کردن با دکمه همبرگری
        navToggle.addEventListener('click', () => {
            const isVisible = mobileNavOverlay.getAttribute('data-visible') === 'true';
            if (isVisible) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // بستن با دکمه 'X' داخل منو
        closeBtn.addEventListener('click', closeMenu);

        // بستن منو با کلیک روی هر کدام از لینک‌ها
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    
    // --- 2. ویجت چت (ارتباط با ما) ---
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
        const chatButton = chatWidget.querySelector('.chat-widget__button');
        const closeChatButton = chatWidget.querySelector('.chat-widget__close-btn');
        const messagesContainer = chatWidget.querySelector('.chat-widget__messages');
        const chatForm = chatWidget.querySelector('.chat-widget__input-form');
        const chatInput = chatWidget.querySelector('.chat-widget__input');

        if (chatButton && closeChatButton) {
            // باز و بسته کردن پنجره چت با دکمه اصلی
            chatButton.addEventListener('click', () => {
                chatWidget.classList.toggle('is-open');
            });
            
            // بستن پنجره چت با دکمه 'X'
            closeChatButton.addEventListener('click', () => {
                chatWidget.classList.remove('is-open');
            });
            
            // ارسال پیام در فرم چت
            if (chatForm && chatInput) {
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
    }

    // --- 3. انیمیشن اسکرول ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // برای اجرای فقط یک بار انیمیشن
            }
        });
    }, { threshold: 0.1 }); // وقتی ۱۰٪ از عنصر دیده شد، انیمیشن اجرا شود
    
    animatedElements.forEach(el => observer.observe(el));
});
