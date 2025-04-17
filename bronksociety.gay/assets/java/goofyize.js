document.addEventListener("DOMContentLoaded", () => {
    const fonts = ['VT323', 'Staatliches', 'Rubik Mono One', 'Silkscreen'];
    const colors = ['#ff0044', '#00ffff', '#ffff00', '#ffcc00', '#ff66ff', '#ffffff', '#00ff66'];
  
    const tagSelectors = ['h1', 'h2', '.button', 'nav a'];
  
    tagSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        const chars = el.textContent.split('');
        el.innerHTML = '';
  
        chars.forEach(char => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.color = colors[Math.floor(Math.random() * colors.length)];
          span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
          el.appendChild(span);
        });
      });
    });
  });
  