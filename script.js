// Initialize Firebase
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId: "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket: "PASTE_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_SENDER_ID_HERE",
  appId: "PASTE_APP_ID_HERE"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Password System
function checkPassword() {
  const password = document.getElementById('passwordInput').value.toLowerCase().trim();
  const errorElement = document.getElementById('errorMessage');

  if (password === 'bittermelon') {
    document.querySelector('.password-page').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
    loadGoals();
  } else {
    errorElement.style.display = 'block';
    errorElement.style.animation = 'shake 0.5s';
    setTimeout(() => errorElement.style.animation = '', 500);
    document.getElementById('passwordInput').value = '';
  }
}

// Goal System
async function loadGoals() {
  const snapshot = await db.collection('goals').get();
  const goals = snapshot.docs.map(doc => doc.data().text);
  const list = document.getElementById('goalsList');
  
  list.innerHTML = goals.map(goal => `
    <li>
      <input type="checkbox">
      <label>${goal}</label>
      <button class="delete-btn" onclick="deleteGoal('${goal.replace(/'/g, "\\'")}')">Delete</button>
    </li>
  `).join('');
}

async function addNewGoal() {
  const goal = prompt("What's our new dream?");
  if (goal) {
    await db.collection('goals').add({ text: goal });
    loadGoals();
  }
}

async function deleteGoal(goalText) {
  const query = await db.collection('goals').where('text', '==', goalText).get();
  query.forEach(async doc => {
    await db.collection('goals').doc(doc.id).delete();
  });
  loadGoals();
}

// Load goals when page opens
window.addEventListener('load', loadGoals);
