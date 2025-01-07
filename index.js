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

// Dynamic loading spinner (optional)
window.addEventListener('load', () => {
  const spinner = document.createElement('div');
  spinner.className = 'loading-spinner';
  document.body.appendChild(spinner);

  setTimeout(() => {
    spinner.remove();
  }, 1000); // Simulate loading delay
});
