// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmQADVxAIX5jJeDmOWUc47_Tnsy_vrpYg",
  authDomain: "luiz-lalaine-goals-b49e6.firebaseapp.com",
  projectId: "luiz-lalaine-goals-b49e6",
  storageBucket: "luiz-lalaine-goals-b49e6.firebasestorage.app",
  messagingSenderId: "571844583451",
  appId: "1:571844583451:web:cc400d53a8d317ef0d98be"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Test Firebase Connection
console.log("Firebase initialized:", firebase.app().name);
db.collection('goals').add({ text: "Test Goal" })
  .then(() => console.log("Test goal added successfully!"))
  .catch(error => console.error("Error adding test goal:", error));

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
  try {
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
    console.log("Goals loaded:", goals);
  } catch (error) {
    console.error("Error loading goals:", error);
  }
}

async function addNewGoal() {
  const goal = prompt("What's our new dream?");
  if (goal) {
    try {
      await db.collection('goals').add({ text: goal });
      console.log("Goal added:", goal);
      loadGoals();
    } catch (error) {
      console.error("Error adding goal:", error);
    }
  }
}

async function deleteGoal(goalText) {
  try {
    const query = await db.collection('goals').where('text', '==', goalText).get();
    query.forEach(async doc => {
      await db.collection('goals').doc(doc.id).delete();
    });
    console.log("Goal deleted:", goalText);
    loadGoals();
  } catch (error) {
    console.error("Error deleting goal:", error);
  }
}

// Load goals when page opens
window.addEventListener('load', loadGoals);
