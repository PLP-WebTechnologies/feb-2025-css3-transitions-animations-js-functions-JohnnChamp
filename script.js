const animateBtn = document.getElementById('animateBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const saveBtn = document.getElementById('savePreferenceBtn');
const message = document.getElementById('message');
const body = document.body;

// Add bounce animation
animateBtn.addEventListener('click', () => {
  animateBtn.classList.remove('animate'); // Reset if class is already there
  void animateBtn.offsetWidth; // Trigger reflow
  animateBtn.classList.add('animate');
});

// Toggle theme (light <-> dark)
toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateGreeting();
});

// Save theme preference to localStorage
saveBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  message.textContent = 'Theme preference saved!';
  setTimeout(() => message.textContent = '', 3000);
});

// Load theme preference from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
  updateGreeting();
});

function updateGreeting() {
  const greeting = document.getElementById('greeting');
  if (body.classList.contains('dark')) {
    greeting.textContent = 'Welcome back (Dark Theme)!';
  } else {
    greeting.textContent = 'Welcome!';
  }
}
