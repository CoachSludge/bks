// Firebase imports (ESM via CDN)
import { 
    initializeApp 
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  
  import { 
    getAuth, 
    signInWithEmailAndPassword, 
    setPersistence, 
    browserLocalPersistence, 
    browserSessionPersistence, 
    sendPasswordResetEmail 
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  
  // Your Firebase config
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
  
  // Handle login form
  document.querySelector(".login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.querySelector('input[name="remember"]').checked;
  
    const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
  
    try {
      await setPersistence(auth, persistence);
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Pucker up buttercup... you're in.");
      window.location.href = "testing/dashboard.html";
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
  
  // Handle forgot password
  document.getElementById("forgot-password-link").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("username").value;
  
    if (!email) {
      alert("⚠️ Please enter your email to receive a reset link.");
      return;
    }
  
    try {
      await sendPasswordResetEmail(auth, email);
      alert("📨 Password reset link sent! Check your inbox.");
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
  