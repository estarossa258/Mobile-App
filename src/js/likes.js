function toggleHeart(cardId) {
    var heartIcon = document.getElementById('heartIcon-' + cardId);
    var fullHeartSrc = './assets/imgs/heart4.png';
    var hollowHeartSrc = './assets/imgs/heart3.png';
    
    // Get the current state from local storage
    var isHeartFull = localStorage.getItem('heartState-' + cardId) === 'true';
  
    if (isHeartFull) {
      heartIcon.setAttribute('src', hollowHeartSrc);
      // Update the state in local storage
      localStorage.setItem('heartState-' + cardId, 'false');
    } else {
      heartIcon.setAttribute('src', fullHeartSrc);
      // Update the state in local storage
      localStorage.setItem('heartState-' + cardId, 'true');
    }
  }
  
  // Restore the heart states on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Loop through the heart icons
    var heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(function(heartIcon) {
      var cardId = heartIcon.id.split('-')[1];
      var isHeartFull = localStorage.getItem('heartState-' + cardId) === 'true';
  
      // Set the heart icon source based on the stored state
      if (isHeartFull) {
        heartIcon.setAttribute('src', './assets/imgs/heart4.png');
      } else {
        heartIcon.setAttribute('src', './assets/imgs/heart3.png');
      }
    });
  });