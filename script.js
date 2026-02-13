document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('response-message');
    const buttonsContainer = document.querySelector('.buttons-container');
    const mainTitle = document.querySelector('.main-title');

    yesBtn.addEventListener('click', () => {
        // Celebration!
        buttonsContainer.style.display = 'none';
        mainTitle.style.display = 'none'; // Optional: hide question
        responseMessage.classList.remove('hidden');
        responseMessage.classList.add('celebration');

        // Intensify hearts
        setInterval(() => {
            createHeart();
        }, 100);

        // Add confetti if you want, but sticking to hearts for now to keep it simple & elegant
    });

    let noBtnHoverCount = 0;

    // Desktop hover effect
    noBtn.addEventListener('mouseover', moveNoButton);
    // Mobile touch effect
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent click
        moveNoButton();
    });

    function moveNoButton() {
        noBtnHoverCount++;

        // Make the button run away
        const containerRect = document.querySelector('.content-wrapper').getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        // Calculate available space
        const maxX = containerRect.width - btnRect.width - 40; // 20px padding
        const maxY = containerRect.height - btnRect.height - 40;

        const randomX = Math.random() * maxX - (maxX / 2);
        const randomY = Math.random() * maxY - (maxY / 2);

        // Apply transform instead of absolute positioning to keep it in flow initially if wanted, 
        // but absolute makes it freer to move. Let's use transform on the button itself.
        // But wait, transform is relative to current position. 
        // Let's use fixed/absolute position context of the button container which is flex.

        // Simpler approach for "running away": 
        // Change position to absolute when it first starts moving so it breaks out of flex flow
        noBtn.style.position = 'absolute';

        // Generate random coordinates within the window or a safe area
        // Let's keep it within the content wrapper for now so it doesn't disappear

        const wrapper = document.querySelector('.content-wrapper');
        const wrapperRect = wrapper.getBoundingClientRect();

        const safePadding = 20;
        const newX = Math.floor(Math.random() * (wrapperRect.width - noBtn.offsetWidth - safePadding * 2)) + safePadding;
        const newY = Math.floor(Math.random() * (wrapperRect.height - noBtn.offsetHeight - safePadding * 2)) + safePadding;

        // We need to account that the button is inside .buttons-container which is inside .content-wrapper
        // Setting left/top relates to the nearest positioned ancestor.
        // .buttons-container has position: relative.

        // Actually, to make it circle around the Yes button or just move randomly:
        // Let's just create a random translation.

        const maxMove = 150; // px
        const moveX = (Math.random() - 0.5) * maxMove * 2;
        const moveY = (Math.random() - 0.5) * maxMove * 2;

        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Optional: Change text after a few tries
        if (noBtnHoverCount === 3) {
            noBtn.innerText = "Are you sure? 🥺";
            noBtn.style.background = "#ffe6e6"; // lighter background
        } else if (noBtnHoverCount === 6) {
            noBtn.innerText = "Really? 😢";
        } else if (noBtnHoverCount > 8) {
            noBtn.style.display = 'none'; // Give up
        }
    }
});

function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    // Initial batch
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, Math.random() * 3000);
    }

    // Continuous flow
    setInterval(createHeart, 800);
}

function createHeart() {
    const container = document.querySelector('.hearts-container');
    if (!container) return; // safety

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // or use different colored hearts

    // Randomize
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 3 + 4; // 4-7s
    const size = Math.random() * 1.5 + 0.5; // 0.5 - 2rem

    heart.style.left = `${startLeft}%`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.fontSize = `${size}rem`;

    container.appendChild(heart);

    // Cleanup
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
