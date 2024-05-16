import { supabase, successNotification, errorNotification } from "../main";


// Assign Logout Functionality
const btn_logout = document.getElementById("btn_logout");

btn_logout.onclick = async () => {
    let { error } = await supabase.auth.signOut()

    
    if (error == null) {
        successNotification("Logged out successfully");
        //Clearing the local storage
        localStorage.clear();

        //Redirect to login page
        window.location.pathname = "/index.html";

    } else {
        errorNotification("Logout Failed",10);
    }
};