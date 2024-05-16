import "./main.59d65ffb.js";
/* empty css                */function performSearch(event) {
  event.preventDefault();
  var searchQuery = document.getElementById("searchInput").value;
  console.log("Performing search for:", searchQuery);
  document.getElementById("searchInput").value = "";
}
document.getElementById("searchButton").addEventListener("click", performSearch);
