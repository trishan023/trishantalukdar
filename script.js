// Theme toggle functionality
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const toggles = document.querySelectorAll('.theme-toggle');
  toggles.forEach(toggle => {
    if (theme === 'dark') {
      toggle.querySelector('.sun-icon').style.display = 'block';
      toggle.querySelector('.moon-icon').style.display = 'none';
    } else {
      toggle.querySelector('.sun-icon').style.display = 'none';
      toggle.querySelector('.moon-icon').style.display = 'block';
    }
  });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  
  // Add event listeners to theme toggle buttons
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
