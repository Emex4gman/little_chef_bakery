const contactUsFrom = document.getElementsByClassName("contact-us")[0];
contactUsFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  if (contactUsFrom.name.value === "") {
    alert("Please Enter your name");
    return false;
  }
  if (contactUsFrom.email.value === "") {
    alert("Please Enter your email");
    return false;
  }
  if (contactUsFrom.message.value === "") {
    alert("Please Enter your Message");
    return false;
  }
  contactUsFrom.name.value = "";
  contactUsFrom.email.value = "";
  contactUsFrom.message.value = "";
  alert("Your message has been sent");
});
