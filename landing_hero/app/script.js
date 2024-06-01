document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.hero__nav_links');
    const navLinks = document.querySelectorAll('.hero__nav_link');
  
    navList.addEventListener('mousemove', (event) => {
      const rect = navList.getBoundingClientRect();
      const offsetY = event.clientY - rect.top;
  
      navLinks.forEach((link, index) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterY = linkRect.top + linkRect.height / 2 - rect.top;
        const distance = Math.abs(offsetY - linkCenterY);
  
        let scale = 1;
        if (distance < 20) {
          scale = 1.3;
        } else if (distance < 50) {
          scale = 1.2;
        } else if (distance < 70) {
          scale = 1.1;
        }
  
        link.style.transform = `scale(${scale})`;
      });
    });
  
    navList.addEventListener('mouseleave', () => {
      navLinks.forEach(link => {
        link.style.transform = 'scale(1)';
      });
    });
  });
  