const inputFields = document.querySelectorAll(".emailInput");
const forms = document.querySelectorAll("form");
const errorMessages = document.querySelectorAll(".errorMessage");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    inputFields.forEach((inpF) => {
      inpF.classList.remove("wrongEmail");
    });
  });
});
inputFields.forEach((inpF) => {
  inpF.addEventListener("invalid", (e) => {
    e.preventDefault();
    inpF.classList.add("wrongEmail");
  });
});
