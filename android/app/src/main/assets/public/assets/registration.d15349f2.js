import { s as supabase, a as successNotification, e as errorNotification } from "./main.59d65ffb.js";
/* empty css                 */const form_register = document.getElementById("form_register");
form_register.onsubmit = async (e) => {
  e.preventDefault();
  document.querySelector("#form_register button").disabled = true;
  document.querySelector(
    "#form_register button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;
  const formData = new FormData(form_register);
  if (formData.get("password") == formData.get("password_confirmation")) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.get("email"),
      password: formData.get("password")
    });
    let user_id = data.user.id;
    if (user_id != null) {
      const { data: data2, error: error2 } = await supabase.from("user_infos").insert([
        {
          full_name: formData.get("full_name"),
          mobile_no: formData.get("mobile_no"),
          user_id
        }
      ]).select();
      if (error2 == null) {
        successNotification("Registered Successfully  <a href='./index.html'>Click here to login! </a>", 15);
      } else {
        errorNotification("Something wrong happened. Cannot register account.", 5);
        console.log(error2);
      }
      form_register.reset();
    }
  } else {
    errorNotification("Passwords do not match.", 3);
  }
  document.querySelector("#form_register button").disabled = false;
  document.querySelector("#form_register button").innerHTML = `Sign Up`;
};
