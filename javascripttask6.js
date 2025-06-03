//  Run JS only after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactform');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    const nameError = document.getElementById('nameerror');
    const emailError = document.getElementById('emailerror');
    const messageError = document.getElementById('messageerror');
    const successMsg = document.getElementById('successmsg');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent actual form submission
  
      // Clear old messages
      nameError.innerText = "";
      emailError.innerText = "";
      messageError.innerText = "";
      successMsg.innerText = "";
  
      let valid = true;
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
      if (name === "") {
        nameError.innerText = "Name is required.";
        valid = false;
      }
  
      if (email === "") {
        emailError.innerText = "Email is required.";
        valid = false;
      } else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email.";
        valid = false;
      }
  
      if (message === "") {
        messageError.innerText = "Message is required.";
        valid = false;
      }
  
      if (valid) {
        successMsg.innerText = "Form submitted successfully!";
        form.reset();
      }
    });
  });
  