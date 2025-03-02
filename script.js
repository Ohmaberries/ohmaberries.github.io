// Updated Goal System
function saveGoals() {
    const goals = Array.from(document.querySelectorAll('.goals-list li')).map(li => {
        return li.querySelector('label').textContent;
    });
    localStorage.setItem('ourGoals', JSON.stringify(goals));
}

function loadGoals() {
    const goals = JSON.parse(localStorage.getItem('ourGoals')) || [];
    const list = document.getElementById('goalsList');
    list.innerHTML = goals.map((goal) => `
        <li>
            <input type="checkbox">
            <label>${goal}</label>
            <button class="delete-btn" onclick="deleteGoal(this)">Delete</button>
        </li>
    `).join('');
}

function deleteGoal(button) {
    const listItem = button.closest('li');
    listItem.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        listItem.remove();
        saveGoals();
    }, 300);
}

function addNewGoal() {
    const goal = prompt("What's our new dream?");
    if(goal) {
        const list = document.getElementById('goalsList');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <input type="checkbox">
            <label>${goal}</label>
            <button class="delete-btn" onclick="deleteGoal(this)">Delete</button>
        `;
        list.appendChild(newItem);
        saveGoals();
    }
}
