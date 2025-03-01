// Password System
function checkPassword() {
    const password = document.getElementById('password').value.toLowerCase().trim();
    if(password === 'bittermelon') {
        document.getElementById('password-screen').remove();
        document.getElementById('content').classList.remove('hidden');
        loadGoals();
    } else {
        alert('Incorrect, my love ❤️ Try again!');
        document.getElementById('password').value = '';
    }
}

// Goal Storage System
const GOAL_STORAGE_KEY = 'our_eternal_goals';

function saveGoals() {
    const goals = Array.from(document.querySelectorAll('.goals-list label'))
                     .map(label => label.textContent);
    localStorage.setItem(GOAL_STORAGE_KEY, JSON.stringify(goals));
}

function loadGoals() {
    const savedGoals = JSON.parse(localStorage.getItem(GOAL_STORAGE_KEY)) || [];
    const list = document.querySelector('.goals-list');
    
    list.innerHTML = savedGoals.map((goal, index) => `
        <li>
            <input type="checkbox" id="goal-${index}">
            <label for="goal-${index}">${goal}</label>
            <span class="heart">❤️</span>
        </li>
    `).join('');
}

function addNewGoal() {
    const newGoal = prompt("What new dream should we add?");
    if(newGoal) {
        const list = document.querySelector('.goals-list');
        const newId = list.children.length;
        
        list.innerHTML += `
            <li>
                <input type="checkbox" id="goal-${newId}">
                <label for="goal-${newId}">${newGoal}</label>
                <span class="heart">❤️</span>
            </li>
        `;
        saveGoals();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname !== '/') {
        document.getElementById('content').classList.add('hidden');
        document.getElementById('page-404').classList.remove('hidden');
    }
});
