// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Scroll to the top of the section
    });
  });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active'); // Add active class to mobile menu icon
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Expandable tasks in experience section
document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', () => {
    const taskList = button.nextElementSibling;
    taskList.classList.toggle('show');
    button.textContent = taskList.classList.contains('show') ? 'Hide Tasks' : 'View Tasks';

    // Smoothly animate the height of the task list
    if (taskList.classList.contains('show')) {
      taskList.style.maxHeight = taskList.scrollHeight + 'px';
    } else {
      taskList.style.maxHeight = '0';
    }
  });
});

// Dark/Light mode toggle with localStorage persistence
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

// Check localStorage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  toggleButton.textContent = 'Toggle Dark Mode';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = 'Toggle Dark Mode';
    localStorage.setItem('theme', 'light'); // Save theme preference
  } else {
    toggleButton.textContent = 'Toggle Light Mode';
    localStorage.setItem('theme', 'dark'); // Save theme preference
  }
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // Trigger animation when 20% of the section is visible
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  section.classList.add('fade-in'); // Add fade-in class for animation
  observer.observe(section); // Observe each section
});

// Dynamic year in footer
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = `&copy; ${currentYear} Nour El-Deen Amin. All rights reserved.`;

// Hover effect for project items
document.querySelectorAll('.project-item').forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'scale(1.05)';
    project.style.transition = 'transform 0.3s ease';
  });

  project.addEventListener('mouseleave', () => {
    project.style.transform = 'scale(1)';
  });
});

// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '&#8593;'; // Up arrow symbol
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '60px'; // Position above the dark/light mode button
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.backgroundColor = 'var(--primary-color)';
scrollToTopButton.style.color = 'var(--background-color)';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.zIndex = '1000';
scrollToTopButton.style.display = 'none'; // Hidden by default

document.body.appendChild(scrollToTopButton);

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Typewriter effect for the hero section
const heroText = document.querySelector('#hero h1');
const originalText = heroText.textContent;
let charIndex = 0;

const typeWriter = () => {
  if (charIndex < originalText.length) {
    heroText.textContent = originalText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 100); // Adjust typing speed here
  }
};

// Start the typewriter effect after the page loads
window.addEventListener('load', () => {
  heroText.textContent = ''; // Clear the text initially
  typeWriter();
});

// Animated progress bars for skills
const skills = [
  { name: 'Networking', level: 90 },
  { name: 'Security', level: 85 },
  { name: 'Automation', level: 80 }
];

const skillsContainer = document.querySelector('.skills-grid');

skills.forEach(skill => {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');

  const skillName = document.createElement('h3');
  skillName.textContent = skill.name;

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');

  const progressFill = document.createElement('div');
  progressFill.classList.add('progress-fill');
  progressFill.style.width = '0'; // Start at 0%

  progressBar.appendChild(progressFill);
  skillItem.appendChild(skillName);
  skillItem.appendChild(progressBar);
  skillsContainer.appendChild(skillItem);

  // Animate the progress bar
  setTimeout(() => {
    progressFill.style.width = `${skill.level}%`;
  }, 500); // Delay the animation for better visual effect
});
