
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i'); 


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  updateButtonIcon();
}


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  updateButtonIcon();

  
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
  localStorage.setItem('theme', currentTheme);
});


function updateButtonIcon() {
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}


function initHeaderTypewriter() {
  const container = document.getElementById('header-typewriter');
  if (!container) {
    return;
  }

  const fullText = container.textContent;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  container.textContent = '';

  const textNode = document.createTextNode('');
  const cursor = document.createElement('span');
  cursor.className = 'vim-cursor';

  container.appendChild(textNode);
  container.appendChild(cursor);

  let charIndex = 0;

  const typingInterval = setInterval(() => {
    charIndex += 1;
    textNode.textContent = fullText.slice(0, charIndex);

    if (charIndex >= fullText.length) {
      clearInterval(typingInterval);
      cursor.classList.add('vim-cursor--blinking');
    }
  }, 80);
}

initHeaderTypewriter();