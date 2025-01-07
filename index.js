// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
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
toggleButton.textContent = '🌓';
toggleButton.classList.add('theme-toggle');
document.body.appendChild(toggleButton);

// Check localStorage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  toggleButton.textContent = '🌞';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  } else {
    toggleButton.textContent = '🌓';
    localStorage.setItem('theme', 'dark');
  }
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
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
scrollToTopButton.innerHTML = '&#8593;';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '80px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '12px';
scrollToTopButton.style.backgroundColor = 'var(--primary-color)';
scrollToTopButton.style.color = 'var(--background-color)';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.zIndex = '1000';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
scrollToTopButton.style.transition = 'all 0.3s ease';

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
    setTimeout(typeWriter, 100);
  }
};

// Start the typewriter effect after the page loads
window.addEventListener('load', () => {
  heroText.textContent = '';
  typeWriter();
});

// Logos for skills with hover animation
const skills = [
  { name: 'Networking', logo: 'https://img.icons8.com/color/96/networking.png' },
  { name: 'Security', logo: 'https://img.icons8.com/color/96/security-checked.png' },
  { name: 'Automation', logo: 'https://img.icons8.com/color/96/automation.png' },
  { name: 'Cisco', logo: 'https://img.icons8.com/color/96/cisco.png' },
  { name: 'Juniper', logo: 'https://img.icons8.com/color/96/juniper-networks.png' },
  { name: 'Python', logo: 'https://img.icons8.com/color/96/python.png' }
];

const skillsContainer = document.querySelector('.skills-grid');

// Clear existing content to avoid duplication
skillsContainer.innerHTML = '';

skills.forEach(skill => {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');

  const skillLogo = document.createElement('img');
  skillLogo.src = skill.logo;
  skillLogo.alt = `${skill.name} Logo`;

  const skillName = document.createElement('h3');
  skillName.textContent = skill.name;

  skillItem.appendChild(skillLogo);
  skillItem.appendChild(skillName);
  skillsContainer.appendChild(skillItem);

  // Add hover animation
  skillItem.addEventListener('mouseenter', () => {
    skillLogo.style.transform = 'rotate(360deg)';
    skillLogo.style.transition = 'transform 0.5s ease';
  });

  skillItem.addEventListener('mouseleave', () => {
    skillLogo.style.transform = 'rotate(0deg)';
  });
});

// Dynamic project filtering
const projects = [
  { name: 'ASA 5520 Failure and Replacement', category: 'networking', logo: 'https://img.icons8.com/color/96/cisco.png' },
  { name: 'Firewall Migration', category: 'security', logo: 'https://img.icons8.com/color/96/firewall.png' },
  { name: 'Load Balancer Migration', category: 'automation', logo: 'https://img.icons8.com/color/96/load-balancer.png' },
  { name: 'Router Migration', category: 'networking', logo: 'https://img.icons8.com/color/96/router.png' },
  { name: 'Juniper Switches Upgrade', category: 'security', logo: 'https://img.icons8.com/color/96/switch.png' },
  { name: 'Network Automation', category: 'automation', logo: 'https://img.icons8.com/color/96/automation.png' }
];

const projectsContainer = document.querySelector('.project-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Render all projects initially
renderProjects(projects);

// Add event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);
    renderProjects(filteredProjects);

    // Highlight the active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

function renderProjects(projects) {
  projectsContainer.innerHTML = '';
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    const projectLogo = document.createElement('img');
    projectLogo.src = project.logo;
    projectLogo.alt = `${project.name} Logo`;

    const projectName = document.createElement('h3');
    projectName.textContent = project.name;

    projectItem.appendChild(projectLogo);
    projectItem.appendChild(projectName);
    projectsContainer.appendChild(projectItem);
  });
}

// Count-up animation for stats
const stats = [
  { value: 10, label: 'Projects Completed' },
  { value: 5, label: 'Years of Experience' },
  { value: 100, label: 'Clients Satisfied' }
];

const statsContainer = document.querySelector('.stats-grid');

stats.forEach(stat => {
  const statItem = document.createElement('div');
  statItem.classList.add('stat-item');

  const statValue = document.createElement('h3');
  statValue.textContent = '0';
  statValue.classList.add('stat-value');

  const statLabel = document.createElement('p');
  statLabel.textContent = stat.label;

  statItem.appendChild(statValue);
  statItem.appendChild(statLabel);
  statsContainer.appendChild(statItem);

  // Animate the count-up
  let count = 0;
  const target = stat.value;
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60 FPS

  const updateCount = () => {
    if (count < target) {
      count += increment;
      statValue.textContent = Math.round(count);
      requestAnimationFrame(updateCount);
    } else {
      statValue.textContent = target;
    }
  };

  updateCount();
});

// Particle effect for the hero section
const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
document.querySelector('#hero').appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();

    if (particle.size <= 0.2) {
      particles.splice(index, 1);
      particles.push(new Particle());
    }
  });

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
