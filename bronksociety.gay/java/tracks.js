document.addEventListener("DOMContentLoaded", () => {
  const latestTracks = [
    {
      title: "birthdaymix9000",
      url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/coachsludge/birthdaymix9000"
    },
    {
      title: "Thigh High Socks Mix",
      url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/swedetarded/thigh-high-socks-mix"
    },
    {
      title: "SwedeTard♿︎ AND DJ 張果老 (Zhāng Guǒ Lǎo) - Double Decking Cuba Cheese MIX",
      url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vostokrider/swedetard-and-dj-zhang-guo-lao-double-decking-cuba-cheese-mix"
    }
  ];

  const container = document.getElementById("track-list");

  latestTracks.forEach(track => {
    const wrapper = document.createElement("div");
    wrapper.className = "track-embed";
    wrapper.innerHTML = `
      <iframe 
        width="100%" 
        height="120" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay"
        src="${track.url}&color=%23ff0000&inverse=false&auto_play=false&show_user=true">
      </iframe>
    `;
    container.appendChild(wrapper);
  });
});
