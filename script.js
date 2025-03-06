// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i'); // Get the icon element

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  updateButtonIcon();
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  updateButtonIcon();

  // Save theme preference to localStorage
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
  localStorage.setItem('theme', currentTheme);
});

// Update button icon based on current theme
function updateButtonIcon() {
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}