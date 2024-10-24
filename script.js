function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
  
 function smoothScrollTo(element, duration) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); 
      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
          requestAnimationFrame(animation);
      }
  }

  requestAnimationFrame(animation);
}

   // Scroll to top button functionality
   const scrollToTopButton = document.querySelector('#scrollToTopButton');

   scrollToTopButton.addEventListener('click', () => {
       smoothScrollTo(document.body, 1000); 
   });

   // Show the scroll to top button when scrolling down
   window.addEventListener('scroll', () => {
       if (window.scrollY > 300) {
           scrollToTopButton.style.display = 'block';
       } else {
           scrollToTopButton.style.display = 'none';
       }
   });