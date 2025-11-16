// Initialize envelope interaction
const envelope = document.getElementById('envelope');
let isOpened = false;

envelope.addEventListener('click', function() {
    if (!isOpened) {
        envelope.classList.add('opened');
        isOpened = true;
    } else {
        envelope.classList.remove('opened');
        isOpened = false;
    }
});

// Add sparkle effects on hover
envelope.addEventListener('mouseenter', function() {
    const hearts = document.querySelectorAll('.envelope-heart');
    hearts.forEach(heart => {
        heart.style.animationDuration = '1s';
    });
});

envelope.addEventListener('mouseleave', function() {
    const hearts = document.querySelectorAll('.envelope-heart');
    hearts.forEach(heart => {
        heart.style.animationDuration = '2s';
    });
});
