document.addEventListener("DOMContentLoaded", () => {
    const gifContainer = document.getElementById("random-gifs");
  
    const gifPaths = [
      "../assets/images/offdown.gif",
      "../assets/images/ratedm.gif",
      "../assets/images/baby.gif",
      "../assets/images/nuke.gif",
      "../assets/images/horsekick.gif",
      "../assets/images/toebeans.gif",
      "../assets/images/deadcowboy.gif"
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
  