function checkPassword() {
    const password = document.getElementById('password').value.toLowerCase();
    if (password === 'bittermelon') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        loadSavedGoals();
    } else {
        alert('Incorrect! Try again, Mahal ❤️');
    }
}

function saveGoals() {
    const goals = [];
    document.querySelectorAll('.goals-card label').forEach(label => {
        goals.push(label.textContent);
    });
    localStorage.setItem('ourGoals', JSON.stringify(goals));
}

function loadSavedGoals() {
    const savedGoals = JSON.parse(localStorage.getItem('ourGoals')) || [];
    const list = document.querySelector('.goals-card ul');
    list.innerHTML = '';
    
    savedGoals.forEach((goal, index) => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <input type="checkbox" id="goal${index + 1}">
            <label for="goal${index + 1}">${goal}</label>
            <span class="heart">❤️</span>
        `;
        list.appendChild(newItem);
    });
}

function addNewGoal() {
    const newGoal = prompt("What’s our new dream?");
    if (newGoal) {
        const list = document.querySelector('.goals-card ul');
        const newItem = document.createElement('li');
        const goalId = list.children.length + 1;
        
        newItem.innerHTML = `
            <input type="checkbox" id="goal${goalId}">
            <label for="goal${goalId}">${newGoal}</label>
            <span class="heart">❤️</span>
        `;
        list.appendChild(newItem);
        saveGoals();
    }
}

window.addEventListener('load', loadSavedGoals);
