// Event listener for form submission
document.getElementById("cardDetails").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateCreditCardForm()) {
        return false;
    }

    // Submit the form
    this.submit();
});

// Event listeners for real-time validation
document.getElementById("expDate").addEventListener("input", validateExpDate);
document.getElementById("mmYy").addEventListener("input", validateExpDate);
document.getElementById("cvv").addEventListener("input", validateCVV);
document.getElementById("cardNumber").addEventListener("input", validateCardNumber);

function validateCreditCardForm() {
    return validateExpDate() && validateCVV() && validateCardNumber();
}

function validateExpDate() {
    const expDateInput = document.getElementById("expDate");
    const mmYyInput = document.getElementById("mmYy");
    const expDateError = document.getElementById("expDateError");

    const expDate = expDateInput.value;
    const mmYy = mmYyInput.value;

    const expDatePattern = /^[0-9]{2}$/;

    if (!expDate.match(expDatePattern) || !mmYy.match(expDatePattern)) {
        expDateError.innerHTML = "Invalid expiration date";
        return false;
    }

    expDateError.innerHTML = "";
    return true;
}

function validateCVV() {
    const cvvInput = document.getElementById("cvv");
    const cvvError = document.getElementById("cvvError");

    const cvv = cvvInput.value;
    const cvvPattern = /^[0-9]{3}$/;

    if (!cvv.match(cvvPattern)) {
        cvvError.innerHTML = "Invalid CVV";
        return false;
    }

    cvvError.innerHTML = "";
    return true;
}

function validateCardNumber() {
    const cardNumberInput = document.getElementById("cardNumber");
    const cardNumberError = document.getElementById("cardNumberError");

    const cardNumber = cardNumberInput.value;
    const cardNumberPattern = /^[0-9]{16}$/;

    if (!cardNumber.match(cardNumberPattern)) {
        cardNumberError.innerHTML = "Invalid card number";
        return false;
    }

    cardNumberError.innerHTML = "";
    return true;
}
