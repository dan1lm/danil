
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