document.addEventListener("DOMContentLoaded", () => {
    const gifContainer = document.getElementById("random-gifs");
  
    const gifPaths = [
      "images/offdown.gif",
      "images/ratedm.gif",
      "images/baby.gif",
      "images/nuke.gif",
      "images/horsekick.gif",
      "images/toebeans.gif",
      "images/deadcowboy.gif"
    ];
  
    const numberToShow = 3; // how many gifs to display
  
    // Shuffle the array
    const shuffled = gifPaths.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberToShow);
  
    selected.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "nuke.gif";
      img.className = "edge-gif";
      gifContainer.appendChild(img);
    });
  });
  