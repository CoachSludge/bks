document.addEventListener("DOMContentLoaded", () => {
    const latestTracks = [
      {
        title: "birthdaymix9000",
        url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/coachsludge/birthdaymix9000"
      },
      {
        title: "kesha tik tok but it was made by a failed edm artist from 2025",
        url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/coachsludge/kesha-tik-tok-but-it-was-made-by-a-failed-edm-artist-from-2012-1"
      },
      {
        title: "R6S Consulate Radio Song Jerk Remix",
        url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/coachsludge/r6s-consulate-radio-song-jerk-remix"
      },
      {
        title: "chief keef war but it was made by henry fong",
        url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/coachsludge/chief-keef-war-but-it-was-made-by-henry-fong-2"
      },
      {
        title: "858 D St, Springfield, OR 97477",
        url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/coachsludge/858-d-st-springfield-or-97477"
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
  
  