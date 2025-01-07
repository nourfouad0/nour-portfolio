// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark/Light mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Light Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = 'var(--primary-color)';
toggleButton.style.color = 'var(--background-color)';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = 'Toggle Dark Mode';
  } else {
    toggleButton.textContent = 'Toggle Light Mode';
  }
});

// Add light mode styles dynamically
const lightModeStyles = `
  .light-mode {
    --background-color: #ffffff;
    --text-color: #1a1a1a;
    --card-background: #f0f0f0;
    --primary-color: #6200ee;
    --secondary-color: #3700b3;
    --hover-color: #bb86fc;
  }
  .light-mode #navbar {
    background-color: var(--card-background);
  }
  .light-mode #navbar .nav-links li a {
    color: var(--text-color);
  }
  .light-mode #navbar .nav-links li a:hover {
    color: var(--primary-color);
  }
  .light-mode .experience-item,
  .light-mode .project-item,
  .light-mode .skill-item,
  .light-mode .education-item,
  .light-mode .certification-item {
    background-color: var(--card-background);
    color: var(--text-color);
  }
  .light-mode footer {
    background-color: var(--card-background);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = lightModeStyles;
document.head.appendChild(styleSheet);
