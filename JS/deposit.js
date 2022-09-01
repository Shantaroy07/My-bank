
// ---deposit section----
document.getElementById('btn-deposit').addEventListener('click', function () {

    //update deposite
    const newDeposit = getInputValueBy('deposit-field');
    const previousDepositTotal = getElementValueByID('update-deposit');

    const newDepositTotal = newDeposit + previousDepositTotal;
    setTextElementById('update-deposit', newDepositTotal);

    //update balance

    const previousBalanceTotal = getElementValueByID('update-balance');
    const newBalanceTotal = previousBalanceTotal + newDeposit;
    setTextElementById('update-balance', newBalanceTotal);

})
