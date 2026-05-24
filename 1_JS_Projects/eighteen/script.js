let generateBill = document.querySelector('.generate-bill');
let billAmount = document.querySelector('.bill-amount');
let discountPercentage = document.querySelector('.discount-percentage');
let tipPercentage = document.querySelector('.tip-percentage');
let noOfCustomer = document.querySelector('.no-of-customer');

let totalTipPaid = document.querySelector('.total-tip-paid');
let totalAmountPay = document.querySelector('.total-amount-pay');
let totalAmountPerCustomer = document.querySelector('.total-amount-customer')

let dicountValue = document.querySelector('.dicount-value');
let tipValue = document.querySelector('.tip-value');
let noOfCustomerValue = document.querySelector('.no-of-customer-value');


// Function to update labels dynamically
function updateValues() {
    dicountValue.textContent = discountPercentage.value + "%";
    tipValue.textContent = tipPercentage.value + "%";
    noOfCustomerValue.textContent = noOfCustomer.value;
}

// Add event listeners for dynamic updates
discountPercentage.addEventListener('input', updateValues);
tipPercentage.addEventListener('input', updateValues);
noOfCustomer.addEventListener('input', updateValues);

// Function to calculate bill
function calculateBill() {
    console.log(billAmount.value, discountPercentage.value, tipPercentage.value, noOfCustomer.value);

    const billAmountAfterDiscount = billAmount.value - (discountPercentage.value * billAmount.value) / 100;
    const getTipAmount = billAmountAfterDiscount * (tipPercentage.value / 100);
    const totalBill = billAmountAfterDiscount + getTipAmount;

    let perCustomerAmount = noOfCustomer.value > 0 ? (totalBill / noOfCustomer.value).toFixed(2) : totalBill.toFixed(2);

    totalTipPaid.textContent = getTipAmount.toFixed(2);
    totalAmountPay.textContent = totalBill.toFixed(2);
    totalAmountPerCustomer.textContent = perCustomerAmount;
}

// Attach event listener to the button
generateBill.addEventListener('click', calculateBill);
