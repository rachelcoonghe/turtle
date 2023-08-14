document.addEventListener("DOMContentLoaded", function () {
  const fullNameInput = document.getElementById("fullName");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const genderInput = document.getElementById("gender");
  const continueButton = document.getElementById("continueButton");
  const summaryFullName = document.getElementById("summaryFullName");
  const summaryMobileNumber = document.getElementById("summaryMobileNumber");
  const summaryEmail = document.getElementById("summaryEmail");
  const summaryGender = document.getElementById("summaryGender");

  // Retrieve data from local storage and update the summary table (if available)
  const storedSummaryDate = localStorage.getItem("summaryDate");
  const storedSummaryTime = localStorage.getItem("summaryTime");
  const storedSummaryDuration = localStorage.getItem("summaryDuration");
  const storedSummaryTickets = localStorage.getItem("summaryTickets");
  const storedSummaryTotal = localStorage.getItem("summaryTotal");

  if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
    document.getElementById("summaryDate").textContent = storedSummaryDate;
    document.getElementById("summaryTime").textContent = storedSummaryTime;
    document.getElementById("summaryDuration").textContent = storedSummaryDuration;
    document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
    document.getElementById("summaryTotal").textContent = storedSummaryTotal;
  }

  function validateForm() {
    console.log("validateForm function called");
    const fullName = fullNameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const email = emailInput.value.trim();
    const confirmEmail = confirmEmailInput.value.trim();
    const gender = genderInput.value; // Get gender value

    console.log("fullName:", fullName); // Add this line
  console.log("mobileNumber:", mobileNumber); // Add this line
  console.log("email:", email); // Add this line
  console.log("confirmEmail:", confirmEmail); // Add this line

  fullNameInput.addEventListener("input", validateForm);
  mobileNumberInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  confirmEmailInput.addEventListener("input", validateForm);

    if (fullName !== "" && mobileNumber !== "" && email !== "" && confirmEmail !== "" && email === confirmEmail) {
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("mobileNumber", mobileNumber);
      localStorage.setItem("email", email);
      localStorage.setItem("gender", gender);

      summaryFullName.textContent = fullName;
      summaryMobileNumber.textContent = mobileNumber;
      summaryEmail.textContent = email;
      summaryGender.textContent = gender;

      continueButton.disabled = false; // Enable the button
    } else {
      // At least one condition is not met, disable the button
      continueButton.disabled = true;
    }
  }

  fullNameInput.addEventListener("input", validateForm);
  mobileNumberInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  confirmEmailInput.addEventListener("input", validateForm);

 continueButton.addEventListener("click", () => {
  console.log("Continue button clicked");
  window.location.replace("Payment.html");
});
});

document.addEventListener("DOMContentLoaded", function () {
  const fullNameInput = document.getElementById("fullName");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const genderInput = document.getElementById("gender");
  const continueButton = document.getElementById("continueButton");
  const summaryFullName = document.getElementById("summaryFullName");
  const summaryMobileNumber = document.getElementById("summaryMobileNumber");
  const summaryEmail = document.getElementById("summaryEmail");
  const summaryGender = document.getElementById("summaryGender");

   // Retrieve data from local storage and update the summary table (if available)
  const storedSummaryDate = localStorage.getItem("summaryDate");
  const storedSummaryTime = localStorage.getItem("summaryTime");
  const storedSummaryDuration = localStorage.getItem("summaryDuration");
  const storedSummaryTickets = localStorage.getItem("summaryTickets");
  const storedSummaryTotal = localStorage.getItem("summaryTotal");

  if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
    document.getElementById("summaryDate").textContent = storedSummaryDate;
    document.getElementById("summaryTime").textContent = storedSummaryTime;
    document.getElementById("summaryDuration").textContent = storedSummaryDuration;
    document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
    document.getElementById("summaryTotal").textContent = storedSummaryTotal;
  }


  function validateForm() {
    console.log("validateForm function called");
    const fullName = fullNameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const email = emailInput.value.trim();
    const confirmEmail = confirmEmailInput.value.trim();
    const gender = genderInput.value; // Get gender value

    console.log("fullName:", fullName);
    console.log("mobileNumber:", mobileNumber);
    console.log("email:", email);
    console.log("confirmEmail:", confirmEmail);

    if (fullName !== "" && mobileNumber !== "" && email !== "" && confirmEmail !== "" && email === confirmEmail) {
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("mobileNumber", mobileNumber);
      localStorage.setItem("email", email);
      localStorage.setItem("gender", gender);

      summaryFullName.textContent = fullName;
      summaryMobileNumber.textContent = mobileNumber;
      summaryEmail.textContent = email;
      summaryGender.textContent = gender;

      continueButton.disabled = false; // Enable the button
    } else {
      // At least one condition is not met, disable the button
      continueButton.disabled = true;
    }
  }

  fullNameInput.addEventListener("input", validateForm);
  mobileNumberInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  confirmEmailInput.addEventListener("input", validateForm);

 
});


    

