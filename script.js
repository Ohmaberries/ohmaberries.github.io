function checkPassword() {
    const password = document.getElementById('password').value.toLowerCase();
    if (password === 'bittermelon') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect! Try again, Mahal ❤️');
    }
}

function addNewGoal() {
    const newGoal = prompt("What’s our new dream?");
    if (newGoal) {
        const list = document.querySelector('.goals-card ul');
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <input type="checkbox" id="goal${list.children.length + 1}">
            <label for="goal${list.children.length + 1}">${newGoal}</label>
            <span class="heart">❤️</span>
        `;
        list.appendChild(newItem);
    }
}
