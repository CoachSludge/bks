import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgbz8jsljACBROnv_fhl2Q4Tv_bWyU9rQ",
  authDomain: "bronksociety.firebaseapp.com",
  projectId: "bronksociety",
  storageBucket: "bronksociety.firebasestorage.app",
  messagingSenderId: "419470158693",
  appId: "1:419470158693:web:fe83a47b78bd811fba4f8c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    alert("❌ Passwords don't match.");
    return;
  }

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account created. Welcome to the ranch!");
    window.location.href = "dashboard.html"; // redirect on success
  } catch (error) {
    alert("❌ " + error.message);
  }
});
