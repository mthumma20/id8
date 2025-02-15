window.addEventListener('load', function() {
    // Wait after page load before showing the GIF screen.
    setTimeout(function() {
      const gifScreen = document.getElementById('gifScreen');
      gifScreen.style.display = 'flex';
      
      // After, transition to the first screen with a zoom-in effect.
      setTimeout(function() {
        const firstScreen = document.querySelector('.first-screen');
        
        // Hide the GIF screen.
        gifScreen.style.display = 'none';
        
        // Prepare the first screen for the zoom-in effect.
        firstScreen.style.display = 'flex';
        firstScreen.style.transform = 'scale(0.5)';
        firstScreen.style.opacity = '0';
        
        // Force a reflow so that the initial styles are applied.
        void firstScreen.offsetWidth;
        
        // Set up the transition for transform and opacity.
        firstScreen.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        
        // Trigger the zoom-in (scale to full size and fade in).
        setTimeout(function() {
          firstScreen.style.transform = 'scale(1)';
          firstScreen.style.opacity = '1';
        }, 10);
      }, 5);
    }, 120);
  });
  