// Trigger animation
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');

  // Remove class after animation ends so it can re-trigger
  animateBtn.addEventListener('animationend', () => {
    animateBtn.classList.remove('animate');
  }, { once: true });
});

// Save user preference (e.g. theme)
document.getElementById('savePreferenceBtn').addEventListener('click', () => {
  localStorage.setItem('theme', 'dark');
  alert('Theme preference saved!');
});

// Retrieve and apply preference
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
    document.getElementById('greeting').textContent = 'Welcome back (Dark Theme)!';
  }
});
