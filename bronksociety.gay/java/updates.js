document.addEventListener("DOMContentLoaded", () => {
    const updates = [
      "2025-04-13: Added randomized gay cowboy font styles to About page.",
      "2025-04-10: Fixed image clipping issues on mobile.",
      "2025-04-09: Server page updated with fresh links and memes.",
      "2025-04-07: Now featuring CRT scanlines and broken dreams.",
      "2025-04-01: Launched BROKEBACK.NET — this is not satire."
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
  