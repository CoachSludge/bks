document.addEventListener("DOMContentLoaded", () => {
    const latestTracks = [
      {
        title: "birthdaymix9000",
        url: "https://soundcloud.com/coachsludge/birthdaymix9000"
      },
      {
        title: "Thigh High Socks Mix",
        url: "https://soundcloud.com/swedetarded/thigh-high-socks-mix"
      },
      {
        title: "SwedeTard♿︎ AND DJ 張果老 (Zhāng Guǒ Lǎo) - Double Decking Cuba Cheese MIX",
        url: "https://soundcloud.com/vostokrider/swedetard-and-dj-zhang-guo-lao-double-decking-cuba-cheese-mix"
      }
    ];
  
    const container = document.getElementById("track-list");
  
    latestTracks.forEach(track => {
      const wrapper = document.createElement("div");
      wrapper.className = "track-embed";
  
      wrapper.innerHTML = `
        <iframe 
          scrolling="no" 
          allow="autoplay" 
          src="${track.url}&color=%23ff0000&inverse=false&auto_play=false&show_user=true">
        </iframe>
      `;
  
      container.appendChild(wrapper);
    });
  });
  