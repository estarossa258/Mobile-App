import { supabase, successNotification, errorNotification } from "../main";

const form_login = document.getElementById("form_login");

form_login.onsubmit = async (e) => {
  e.preventDefault();

  // Disable the submit button
  document.querySelector("#form_login button").disabled = true;
  document.querySelector(
    "#form_login button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;

  //Get all values from form
  const formData = new FormData(form_login);


  // Supabase Sigin
  let { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });

   // Get data for session and user
   let session = data.session;
   let user = data.user;


   // If User can be accessed; Or user is already verified
   if (session != null) {
    // Store tokens for API
    localStorage.setItem("access_token", session.access_token);
    localStorage.setItem("refresh_token", session.refresh_token);
   }


  // Show Notification
  if (error == null) {
    successNotification("Login Successfully!");

    // Redirect to dashboard
    window.location.pathname = "/mapView.html";
  } else if (error.message == "Invalid login credentials") {
    errorNotification("Incorrect Email. Cannot login account.", 3);
  } else {
    errorNotification("Incorrect Password. Cannot login account.", 3);
    console.log(error);
  }

  // Reset Form
  form_login.reset();

  // Enable Submit Button
  document.querySelector("#form_login button").disabled = false;
  document.querySelector("#form_login button").innerHTML = `Login`;
};
