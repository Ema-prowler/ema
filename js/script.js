function copyEmail() {
  const emailTextarea = document.getElementById("email-textarea");
  emailTextarea.select();
  document.execCommand("copy");
}
