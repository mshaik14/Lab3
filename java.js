const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPer');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');
const tipCalculatorForm = document.getElementById('tipCalculatorForm');

tipCalculatorForm.addEventListener('input', calculateTip);

function calculateTip() {
    const totBill = parseFloat(billTotalInput.value);
    const tipPer = tipPercentageInput.value;
    const tipAmount = (totBill * tipPer) / 100;
    const totalWithTip = totBill + tipAmount;

    if (!isNaN(totBill)) {
        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    } else {
        tipAmountInput.value = '';
        totalWithTipInput.value = '';
    }
}

calculateTip()