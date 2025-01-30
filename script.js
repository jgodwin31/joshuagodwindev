// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add hover effect to projects
  document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.style.transform = 'translateY(-10px)';
    });
    project.addEventListener('mouseleave', () => {
      project.style.transform = 'translateY(0)';
    });
  });