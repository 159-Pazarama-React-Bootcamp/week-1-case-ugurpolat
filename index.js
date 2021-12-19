const form = document.getElementById("form");
const cardNumber = document.getElementById("card-number");
const cardHolderName = document.getElementById("card-holder");

let numbers = [];
let numberStatus = false;

// add "-" character between digits
cardNumber.addEventListener("input", function (e) {
  let numberValue;
  if (cardNumber.value === "") {
    numberStatus = false;
  } else if ((numbers.length >= 1 || numbers.length <= 19) && !numberStatus) {
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
    }
  }
});

// Delete input value
document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Backspace") {
    if (numbers.length >= 1 || numbers.length <= 19) {
      numbers.pop();
      numberStatus = true;
    }
  }
});

// check card value conditions
const isCreditCardNumberValid = (cardNumbers) => {
  numberArray = cardNumbers.split("");
  if (
    numberArray.length === 19 ||
    numberArray.length === 18 ||
    numberArray.length === 17 ||
    numberArray.length === 16
  ) {
    numberArray = numberArray.filter((v) => v !== "-");
    lastNumbers = Number(numberArray[numberArray.length - 1]);

    if (lastNumbers % 2 == 0) {
      let checkDif = checkNumberDif(numberArray);

      if (checkDif) {
        let totalNumber = totalArr(numberArray);

        if (totalNumber > 16) {
          showSuccess(cardNumber);
        } else {
          showError(cardNumber, "Card number total sum is lower than 16");
        }
      } else {
        showError(cardNumber, "Incorrect character");
      }
    } else {
      showError(cardNumber, "Last number of card is odd");
    }
  } else {
    showError(cardNumber, "Card number is missing, it should be 16-digit");
  }
};

// Check is there any different character
function checkNumberDif(a) {
  return new Set(a).size !== 1;
}

//Calculate card number
function totalArr(arr) {
  let sum = 0;
  arr.forEach((each) => {
    sum += each;
  });

  return sum;
}

// Change small messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control part-1 error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show small message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control part-1 success";
}

form.addEventListener("submit", (e) => {
  isCreditCardNumberValid(cardNumber.value);

  if (cardHolderName.value === "") {
    showError(cardHolderName, "Card holder name is required");
  } else {
    showSuccess(cardHolderName);
  }

  e.preventDefault();
});
