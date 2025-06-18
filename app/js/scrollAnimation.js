document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.about__video, .about__content-image');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('fade-in'), index * 300);
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});