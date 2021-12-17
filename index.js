const form = document.getElementById("form");
const cardNumber = document.getElementById("card-number");
const cardHolderName = document.getElementById("card-holder");

let numbers = [];

cardNumber.addEventListener("input", function (e) {
  if (numbers.length <= 16) {
    let numberValue = cardNumber.value[cardNumber.value.length - 1];
    numbers.push(numberValue);

    if (numbers.length === 4) {
      cardNumber.value += "-";
    } else if (numbers.length === 8) {
      cardNumber.value += "-";
    } else if (numbers.length === 12) {
      cardNumber.value += "-";
    }
  }
});

document.addEventListener("keydown", (e) => {});
const isCreditCardNumberValid = (cardNumber) => {};

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control part-1 error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control part-1 success";
}

form.addEventListener("submit", (e) => {
  if (cardHolderName.value === "") {
    showError(cardHolderName, "Card holder name is required");
  } else {
    showSuccess(cardHolderName);
  }

  e.preventDefault();
});
