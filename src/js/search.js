// Function to handle the search
function performSearch(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the search query from the input field
    var searchQuery = document.getElementById('searchInput').value;
  
    // Perform the search (Replace this with your actual search logic)
    console.log('Performing search for:', searchQuery);
  
    // Clear the input field
    document.getElementById('searchInput').value = '';
  }
  
  // Add event listener to the search button
  document.getElementById('searchButton').addEventListener('click', performSearch);