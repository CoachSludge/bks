// dashboard.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  updateEmail, 
  updatePassword, 
  signOut, 
  updateProfile 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgbz8jsljACBROnv_fhl2Q4Tv_bWyU9rQ",
  authDomain: "bronksociety.firebaseapp.com",
  projectId: "bronksociety",
  storageBucket: "bronksociety.appspot.com",
  messagingSenderId: "419470158693",
  appId: "1:419470158693:web:fe83a47b78bd811fba4f8c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

// Auth State Observer
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    document.getElementById("dashboard-username").textContent = user.displayName || user.email;
  }
});

// Update Email
const emailForm = document.getElementById("email-form");
emailForm.addEventListener("submit", async e => {
  e.preventDefault();
  const newEmail = document.getElementById("email").value;
  try {
    await updateEmail(auth.currentUser, newEmail);
    alert("✅ Email updated");
  } catch (err) {
    alert("❌ " + err.message);
  }
});

// Update Username
const usernameForm = document.getElementById("username-form");
usernameForm.addEventListener("submit", async e => {
  e.preventDefault();
  const newName = document.getElementById("username").value;
  try {
    await updateProfile(auth.currentUser, { displayName: newName });
    alert("✅ Username updated");
  } catch (err) {
    alert("❌ " + err.message);
  }
});

// Update Password
const passwordForm = document.getElementById("password-form");
passwordForm.addEventListener("submit", async e => {
  e.preventDefault();
  const newPass = document.getElementById("password").value;
  try {
    await updatePassword(auth.currentUser, newPass);
    alert("✅ Password updated");
  } catch (err) {
    alert("❌ " + err.message);
  }
});

// Upload Profile Picture
const pfpForm = document.getElementById("pfp-form");
pfpForm.addEventListener("submit", async e => {
  e.preventDefault();
  const file = document.getElementById("pfp").files[0];
  if (!file) return alert("❌ No file selected");
  const path = `custom/${auth.currentUser.displayName || auth.currentUser.uid}/pfp.png`;
  const storageRef = ref(storage, path);

  try {
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await updateProfile(auth.currentUser, { photoURL: url });
    alert("✅ Profile picture uploaded");
  } catch (err) {
    alert("❌ " + err.message);
  }
});

// Save Bio
const bioForm = document.getElementById("bio-form");
bioForm.addEventListener("submit", e => {
  e.preventDefault();
  const bioText = document.getElementById("bio").value;
  localStorage.setItem("bio", bioText); // Replace with Firestore if needed
  alert("✅ Bio saved (local only for now)");
});

// Logout
const logoutBtn = document.getElementById("logout-button");
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
