document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newwithdrawAmmountString=withdrawField.value;
    const currentWithdrawAmmount=parseFloat(newwithdrawAmmountString);
     

    withdrawField.value='';
    
    if(isNaN(currentWithdrawAmmount)){
        alert('Please provide a valid Number')
        return;
    }
    
    const withdrawTotal=document.getElementById('withdraw-total');
    const previouswithdrawTotal=withdrawTotal.innerText;
    const previouswithdraw=parseFloat(previouswithdrawTotal);

    

    const balanceTotalElement=document.getElementById('balance-total');
    const balanceTotalString=balanceTotalElement.innerText;
    const currentBalanceTotal=parseFloat(balanceTotalString);

    

    if(currentWithdrawAmmount >currentBalanceTotal ){
        alert('Tr baper eto tk nai')
        return;
    }

    const currentwithdraw=previouswithdraw+currentWithdrawAmmount;

    withdrawTotal.innerText=currentwithdraw;
    
    const currentBalance=currentBalanceTotal-currentWithdrawAmmount;
    balanceTotalElement.innerText=currentBalance;

   
})