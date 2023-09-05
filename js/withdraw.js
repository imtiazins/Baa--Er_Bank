// console.log('withdraw added');

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithdrawAmount);

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a number')
        return;
    }


    balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);

    

    if(newWithdrawAmount>previousBalanceTotal){
        alert('Baap er bank e eto tk nai');
        return ;
    }
    
    const currentWithdrawTotal= previousWithdrawTotal+newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText= newBalanceTotal;

    
})