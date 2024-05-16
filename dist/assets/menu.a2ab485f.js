import { s as supabase, a as successNotification, e as errorNotification } from "./main.59d65ffb.js";
/* empty css                */const btn_logout = document.getElementById("btn_logout");
btn_logout.onclick = async () => {
  let { error } = await supabase.auth.signOut();
  if (error == null) {
    successNotification("Logged out successfully");
    localStorage.clear();
    window.location.pathname = "/index.html";
  } else {
    errorNotification("Logout Failed", 10);
  }
};
