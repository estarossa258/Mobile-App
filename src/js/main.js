// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//Import Router 
import { setRouter } from "./router/router.js";

//Set router
setRouter();

// Import from supabase
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://vpmiehxihzzcqrzuegdh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbWllaHhpaHp6Y3FyenVlZ2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MjUxODYsImV4cCI6MjAyODQwMTE4Nn0.OqZE-u3EceuIQjKHnD-2L94e4RmLY7SKZ2WVfCS3EMw')


//Success Notifications
function successNotification(message, seconds = 0) {
  document.querySelector(".alert-success").classList.remove("d-none");
  document.querySelector(".alert-success").classList.add("d-block");
  document.querySelector(".alert-success").innerHTML = message;

  if (seconds != 0) {
    setTimeout(function () {
      document.querySelector(".alert-success").classList.remove("d-block");
      document.querySelector(".alert-success").classList.add("d-none");
    }, seconds * 1000);
  }
}

//Error Notifications
function errorNotification(message, seconds = 0) {
  document.querySelector(".alert-danger").classList.remove("d-none");
  document.querySelector(".alert-danger").classList.add("d-block");
  document.querySelector(".alert-danger").innerHTML = message;

  if (seconds != 0) {
    setTimeout(function () {
      document.querySelector(".alert-danger").classList.remove("d-block");
      document.querySelector(".alert-danger").classList.add("d-none");
    }, seconds * 1000);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var boxes = document.querySelectorAll('.box');

  // Iterate over each box
  boxes.forEach(function(box, index) {
    // Check if the clicked state is stored in localStorage
    var isClicked = localStorage.getItem('boxClicked-' + index);
    if (isClicked === 'true') {
      box.classList.add('clicked');
    }

    // Add click event listener to the box
    box.addEventListener('click', function() {
      box.classList.toggle('clicked');

      // Store the clicked state in localStorage
      var isClicked = box.classList.contains('clicked');
      localStorage.setItem('boxClicked-' + index, isClicked);
    });
  });
});


export { supabase, successNotification, errorNotification };