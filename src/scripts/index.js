import "../styles/index.scss";
import "../styles/carousel.scss";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const checkBox = document.getElementById("agree");
const form = document.querySelector(".register__form");
const thankYou = document.querySelector(".thankyou");

const errorMsg = document.querySelector(".errormsg");
const errorMsgEmail = document.querySelector(".errormsg--email");
const errorMsgCheckbox = document.querySelector(".errormsg--checkbox");

let isFormValid = false;

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  isFormValid = true;
  nameInput.classList.remove("errorbrdr");
  errorMsg.classList.add("invisible");
  emailInput.classList.remove("errorbrdr");
  errorMsgEmail.classList.add("invisible");

  if (!nameInput.value) {
    isFormValid = false;
    errorMsg.classList.remove("invisible");
    nameInput.classList.add("errorbrdr");
  } else if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    errorMsgEmail.classList.remove("invisible");
    emailInput.classList.add("errorbrdr");
  } else if (!checkBox.checked) {
    isFormValid = false;
    errorMsgCheckbox.classList.remove("invisible");
    checkBox.classList.add("errorbrdr");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("invisible");
  }
});

nameInput.addEventListener("input", () => {
  validateInputs();
});

emailInput.addEventListener("input", () => {
  validateInputs();
});
