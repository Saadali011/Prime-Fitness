var form = document.getElementById("membershipform");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var formData = {
    firstName: form.elements["firstName"].value,
    lastName: form.elements["lastName"].value,
    phone: form.elements["phone"].value,
    email: form.elements["email"].value,
    address: form.elements["address"].value,
    city: form.elements["city"].value,
    state: form.elements["state"].value,
    zipcode: form.elements["zipcode"].value,
    country: form.elements["country"].value,
    membership: form.elements["membership"].value,
    paymentmethod: form.elements["paymentmethod"].value,
    cardnumber: form.elements["cardnumber"].value,
    expirydate: form.elements["expirydate"].value,
    cvv: form.elements["cvv"].value
  };

  sessionStorage.setItem("formData", JSON.stringify(formData));

  window.location.href = "thankyoumembership.html";

});
