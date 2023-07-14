const form = document.getElementById("cardDetails");

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    if(!validateCreditCardForm()) {
        return false;
    }

    //submit the form

    form.submit;

});

function validateCreditCardForm() {
    // Get the values of the form inputs.
    
    const expDate = document.getElementById("expDate").value;
    const cvv = document.getElementById("cvv").value;
    const monthYear = document.getElementById("mmYy").value;
    
    
    // Check the expiration date format.
    if (!expDate.match(/^[0-9]{2}\/[0-9]{2}$/)) {
      document.getElementById("expDateError").innerHTML = "Invalid expiration date";
      return false;
    }

    if (!monthYear.match(/^[0-9]{2}\/[0-9]{2}$/)) {
        document.getElementById("expDateError").innerHTML = "Invalid expiration date";
        return false;
    }
  
    // Check the CVV format.
    if (!cvv.match(/^[0-9]{3}$/)) {
      document.getElementById("cvvError").innerHTML = "Invalid CVV";
      return false;
    }
  
    // The form is valid.
    return true;
}


function validateCardNumber(cardNumber) {
    //check the card number format

    const cardNumber = document.getElementById("cardNumber").value;

    if (!cardNumber.match(/^[0-9]{16}$/)) {
      document.getElementById("cardNumberError").innerHTML = "Invalid card number";
      return false;
    }
    // using luhn's algorithm to check further for validity
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = cardNumber.charAt(i);
      if (i % 2 == 0) {
        digit = digit * 2;
        if (digit > 9) {
          digit = digit - 9;
        }
      }
      sum += digit;
    }
    if (sum % 10 != 0) {
      document.getElementById("cardNumberError").innerHTML = "Invalid please input Visa or MasterCard ";
      return false;
    }
  
    return true;
}