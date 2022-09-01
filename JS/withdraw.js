//---withdraw section--------

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //get withdraw
    const newWithdrawAmount = getInputValueBy('withdraw-field');

    if (isNaN(newWithdrawAmount)) {
        alert('Provide a valid number');
        return;
    }

    //get balance
    const previousBalance = getElementValueByID('update-balance');


    if (newWithdrawAmount > previousBalance) {
        alert('You have not enough money');
        return;
    }

    //update withdraw

    const previousWithdrawTotal = getElementValueByID('update-withdraw');
    const currentWithdraw = newWithdrawAmount + previousWithdrawTotal;
    setTextElementById('update-withdraw', currentWithdraw);

    //update balance
    const currentBalance = previousBalance - newWithdrawAmount;
    setTextElementById('update-balance', currentBalance);



})