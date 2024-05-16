// Get the form element and add an event listener for form submission
const form = document.getElementById('searchid');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  const input = document.getElementById('searchInput');
  const location = input.value;

  // Generate the Google Maps URL with the location parameter
  const mapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  // Open the Google Maps URL in a new tab or window
  window.open(mapsURL, '_blank');
});