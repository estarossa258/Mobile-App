import { supabase, successNotification, errorNotification } from "../main";

const form_register = document.getElementById("form_register");

form_register.onsubmit = async (e) => {
    e.preventDefault();

    // Disable the submit button
  document.querySelector("#form_register button").disabled = true;
  document.querySelector(
    "#form_register button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;

    //Get all values from form
    const formData = new FormData(form_register);

   if(formData.get("password") == formData.get("password_confirmation")) {

    //Supabase SignUp
    const { data, error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
    })

    // Store into variable the user_id
    let user_id = data.user.id;

    // Check if user_id does exist; registered
    if (user_id != null) {
      // Supabase user_information table
      const { data, error } = await supabase
        .from("user_infos")
        .insert([
          {
            full_name: formData.get("full_name"),
            mobile_no: formData.get("mobile_no"),
            user_id: user_id,
          },
        ])
        .select();

        //Show notification
        if(error == null){
        successNotification("Registered Successfully! Please confirm your email before logging in", 15);
        }else {errorNotification("Something wrong happened. Cannot register account.", 5);
        console.log(error);
    }
    //Reset form
    form_register.reset(); 
    }
   }else {
    errorNotification("Passwords do not match.", 3);
   }
   // Enable Submit Button
    document.querySelector("#form_register button").disabled = false;
    document.querySelector("#form_register button").innerHTML = `Sign Up`;
 };