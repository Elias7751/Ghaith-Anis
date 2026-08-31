document.addEventListener('DOMContentLoaded', () => {
    // Add some interactive elements
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(-5px)';
            }, 200);
        });
    });

    // Console easter egg
    console.log('%cتم تحميل الصفحة بنجاح! 😎', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
});
