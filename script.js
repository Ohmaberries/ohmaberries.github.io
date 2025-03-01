function checkPassword() {
    const password = document.getElementById('password').value.toLowerCase();
    if (password === 'bittermelon') {
        document.getElementById('password-screen').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        alert('Try again, Mahal! 🥲');
    }
}

function addNewGoal() {
    const newGoal = prompt("What’s your new goal, Mahal?");
    if (newGoal) {
        const goalsList = document.querySelector('.goals-list ul');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <input type="checkbox" id="goal${goalsList.children.length + 1}">
            <label for="goal${goalsList.children.length + 1}">${newGoal}</label>
            <span class="heart">❤️</span>
        `;
        goalsList.appendChild(newItem);
    }
}
