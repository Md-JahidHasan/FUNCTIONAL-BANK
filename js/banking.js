function getInputValue(inputId){
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const inputAmountNum = parseFloat(inputAmountText);
    inputAmount.value = '';
    return inputAmountNum;
};

function getShownValue(inputAmountNum, showId){
    const showInput = document.getElementById(showId);
    const showInputText = showInput.innerText;
    const showInputNum = parseFloat(showInputText);
    showInput.innerText = showInputNum + inputAmountNum;

};

function getTotalBalance(inputAmountNum, isAdd){
    const showBalance = document.getElementById('show-balance');
    const showBalanceText = showBalance.innerText;
    const showBalanceAmount = parseFloat(showBalanceText);
    if(isAdd == true){
        showBalance.innerText = showBalanceAmount + inputAmountNum;
    }
    else{
        showBalance.innerText = showBalanceAmount - inputAmountNum;
    }
}


document.getElementById('deposit-submit-button').addEventListener('click', function (){
    const depositAmountNum = getInputValue('deposit-amount');
    if(depositAmountNum > 0 ){
        getShownValue(depositAmountNum, 'show-deposit');
        getTotalBalance(depositAmountNum, true)
    }
   

    // const showBalance = document.getElementById('show-balance');
    // const showBalanceText = showBalance.innerText;
    // const showBalanceAmount = parseFloat(showBalanceText);
    // showBalance.innerText = showBalanceAmount + depositAmountNum;
   
    
});


document.getElementById('withdraw-submit-button').addEventListener('click', function(){
    const withdrawAmountNum = getInputValue('withdraw-amount');

    if(withdrawAmountNum > 0 ){
        getShownValue(withdrawAmountNum, 'show-withdraw')
        getTotalBalance(withdrawAmountNum, false)
    }

    // const showBalance = document.getElementById('show-balance');
    // const showBalanceText = showBalance.innerText;
    // const showBalanceAmount = parseFloat(showBalanceText);
    // showBalance.innerText = showBalanceAmount - withdrawAmountNum;
    

    // withdrawAmount.value = '';
})