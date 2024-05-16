import { s as supabase, a as successNotification, e as errorNotification } from "./main.59d65ffb.js";
/* empty css                 */const form_login = document.getElementById("form_login");
form_login.onsubmit = async (e) => {
  e.preventDefault();
  document.querySelector("#form_login button").disabled = true;
  document.querySelector(
    "#form_login button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;
  const formData = new FormData(form_login);
  let { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password")
  });
  let session = data.session;
  data.user;
  if (session != null) {
    localStorage.setItem("access_token", session.access_token);
    localStorage.setItem("refresh_token", session.refresh_token);
  }
  if (error == null) {
    successNotification("Login Successfully!");
    window.location.pathname = "/mapView.html";
  } else {
    errorNotification("Incorrect Password. Cannot login account.", 3);
    console.log(error);
  }
  form_login.reset();
  document.querySelector("#form_login button").disabled = false;
  document.querySelector("#form_login button").innerHTML = `Login`;
};
