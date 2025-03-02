// Password System
function checkPassword() {
    const password = document.getElementById('passwordInput').value.toLowerCase().trim();
    const errorElement = document.getElementById('errorMessage');
    
    if(password === 'bittermelon') {
        // Hide password screen
        document.getElementById('password-screen').style.display = 'none';
        // Show content
        document.getElementById('mainContent').classList.remove('hidden');
        // Load goals
        loadGoals();
    } else {
        // Show error
        errorElement.classList.remove('hidden');
        // Clear input
        document.getElementById('passwordInput').value = '';
        // Shake animation
        errorElement.style.animation = 'shake 0.5s';
        setTimeout(() => errorElement.style.animation = '', 500);
    }
}

// Goal System
function loadGoals() {
    const goals = JSON.parse(localStorage.getItem('ourGoals')) || [];
    const list = document.getElementById('goalsList');
    list.innerHTML = goals.map((goal, index) => `
        <li>
            <input type="checkbox" id="goal${index}">
            <label for="goal${index}">${goal}</label>
            <span class="heart">❤️</span>
        </li>
    `).join('');
}

function addNewGoal() {
    const goal = prompt("What new dream should we add?");
    if(goal) {
        const goals = JSON.parse(localStorage.getItem('ourGoals')) || [];
        goals.push(goal);
        localStorage.setItem('ourGoals', JSON.stringify(goals));
        loadGoals();
    }
}

// Initial load
window.onload = loadGoals;
