function checkPassword() {
    const password = document.getElementById('password').value.toLowerCase();
    if (password === 'bittermelon') {
        document.getElementById('password-screen').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        alert('Try again, Mahal! 🥲');
    }
}

function plantSunflower() {
    const garden = document.getElementById('garden-bed');
    const sunflower = document.createElement('img');
    sunflower.src = 'assets/sunflower.png';
    sunflower.style.width = '50px';
    sunflower.style.height = '50px';
    sunflower.style.animation = 'grow 0.5s ease-in';
    garden.appendChild(sunflower);
}

// Add CSS animation for sunflowers
const style = document.createElement('style');
style.textContent = `
    @keyframes grow {
        0% { transform: scale(0); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);