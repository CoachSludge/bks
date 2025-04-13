document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        { name: "Coach", title: "Lead Devv", image: "https://cdn.discordapp.com/avatars/490984028283994112/146f087ea4fec8574548822fca5c7c7f?size=1024", url: "https://www.bubba.industries/coachsludge" },
        { name: "Rice", title: "Lead Mod Dev", image: "https://cdn.discordapp.com/avatars/1065484017153101864/c5f9acd974b296c4a1a38916d3e9625b?size=1024", url: "https://example.com/rice" },
        { name: "Vostok", title: "Community Ambassador", image: "https://cdn.discordapp.com/avatars/1092554118125588680/efc75552d40569eef3bb8b25c6e9ea57?size=1024", url: "https://example.com/rice" },
        { name: "Solicify", title: "Mod Dev", image: "https://cdn.discordapp.com/avatars/1102266027057881148/745a449d3bdc24f94886d75db0b00a0f?size=1024", url: "https://example.com/solicify" }
    ];

    const supporters = [
        { name: "Frank", title: "Supporter", image: "https://cdn.discordapp.com/avatars/607645242379862039/e6f902fb106b5a4ae0703d928525c77d?size=1024", url: "https://www.bubba.industries/frank" },
        { name: "Rob", title: "Supporter", image: "https://cdn.discordapp.com/avatars/554939145626058767/e97967877e488587e8bcd588a444dc10?size=1024", url: "https://www.bubba.industries/rob" }
    ];

    const ransomFonts = ['VT323', 'Staatliches', 'Rubik Mono One', 'Silkscreen'];
    const ransomColors = ['#ff0044', '#00ffff', '#ffff00', '#ffcc00', '#ff66ff', '#ffffff', '#00ff66'];

    const teamContainer = document.getElementById("team-list");
    const supportersContainer = document.getElementById("supporters-list");

    function getRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function createMemberCard(member) {
        const memberCard = document.createElement("a");
        memberCard.href = member.url;
        memberCard.target = "_blank";
        memberCard.className = "member-card";

        // Random font and color styles
        const nameFont = getRandom(ransomFonts);
        const nameColor = getRandom(ransomColors);
        const titleFont = getRandom(ransomFonts);
        const titleColor = getRandom(ransomColors);

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3 style="font-family: '${nameFont}'; color: ${nameColor};">${member.name}</h3>
            <p style="font-family: '${titleFont}'; color: ${titleColor};">${member.title}</p>
        `;

        return memberCard;
    }

    teamMembers.forEach(member => {
        teamContainer.appendChild(createMemberCard(member));
    });

    supporters.forEach(supporter => {
        supportersContainer.appendChild(createMemberCard(supporter));
    });
});
