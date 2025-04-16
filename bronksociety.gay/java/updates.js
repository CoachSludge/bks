document.addEventListener("DOMContentLoaded", () => {
  const updates = [
    "added gambling",
    "shat ourselves",
    "Launched BRONKSOCIETY.GAY — this is not satire."
  ];

  const list = document.getElementById("updates-list");

  if (list && updates.length > 0) {
    updates.forEach(update => {
      const li = document.createElement("li");
      li.textContent = update;
      list.appendChild(li);
    });
  }
});
