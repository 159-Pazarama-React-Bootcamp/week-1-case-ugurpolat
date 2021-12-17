const form = document.getElementById("form");
const cardNumber = document.getElementById("card-number");
const cardHolderName = document.getElementById("card-holder");

let numbers = [];
let numberStatus = false;

cardNumber.addEventListener("input", function (e) {
  let numberValue;
  if (cardNumber.value === "") {
    numberStatus = false;
  } else if ((numbers.length >= 1 || numbers.length <= 19) && !numberStatus) {
    numberStatus = false;
    numberValue = `${cardNumber.value[cardNumber.value.length - 1]}`;
    numbers.push(numberValue);

    if (cardNumber.value.length === 4) {
      cardNumber.value += "-";
      numbers.push(cardNumber.value[4]);
    } else if (cardNumber.value.length === 9) {
      cardNumber.value += "-";
      numbers.push(cardNumber.value[9]);
    } else if (cardNumber.value.length === 14) {
      cardNumber.value += "-";
      numbers.push(cardNumber.value[14]);
    } else if (cardNumber.value.length === 19) {
      numberStatus = true;
    }
  }
});

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Backspace") {
    if (numbers.length >= 1 || numbers.length <= 19) {
      numbers.pop();

      numberStatus = true;
    }
  }
});
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

  isCreditCardNumberValid(numbers);

  e.preventDefault();
});
