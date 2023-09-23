var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var formData = {
    firstName: form.elements["firstName"].value,
    lastName: form.elements["lastName"].value,
    email: form.elements["email"].value,
    phoneNumber: form.elements["phoneNumber"].value,
    message: form.elements["message"].value
  };
  
  sessionStorage.setItem("formData", JSON.stringify(formData));

  window.location.href = "thankyouenquiry.html";
});

