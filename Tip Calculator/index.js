// 1. Grab HTML inputs and outputs
const billInput = document.getElementById("bill-amount");
const tipSelect = document.getElementById("tip-percent");
const peopleInput = document.getElementById("people-count");
const calculateBtn = document.getElementById("calculate-btn");

const tipPerPersonDisplay = document.getElementById("tip-per-person");
const totalPerPersonDisplay = document.getElementById("total-per-person");

// 2. Calculation logic
calculateBtn.addEventListener("click", () => {
  // Convert text values to numbers
  const bill = parseFloat(billInput.value);
  const tipRate = parseFloat(tipSelect.value);
  const people = parseInt(peopleInput.value, 10);

  // Simple input validation
  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount greater than 0.");
    return;
  }

  if (isNaN(people) || people < 1) {
    alert("Number of people must be at least 1.");
    return;
  }

  // Arithmetic formulas
  const totalTip = bill * tipRate;
  const grandTotal = bill + totalTip;

  const tipPerPerson = totalTip / people;
  const totalPerPerson = grandTotal / people;

  // .toFixed(2) ensures two decimal places (e.g., 25.50 instead of 25.5)
  tipPerPersonDisplay.textContent = `₹${tipPerPerson.toFixed(2)}`;
  totalPerPersonDisplay.textContent = `₹${totalPerPerson.toFixed(2)}`;
});