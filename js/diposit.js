document.getElementById('btn-diposit').addEventListener('click', function(){
    const dipositField=document.getElementById('deposit-field');
    const dipositAmount=dipositField.value;
    const newDepositAmmount=parseFloat(dipositAmount);
    
    const depositTotalElemnt=document.getElementById('diposit-total');
    const depositTotal=depositTotalElemnt.innerText;
    const newdipositTotal=parseFloat(depositTotal);

    currentdipositTotal=newdipositTotal+newDepositAmmount;

     depositTotalElemnt.innerText=currentdipositTotal;



    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotal.innerText;
    const prviousBalanceTotal=parseFloat(previousBalanceTotalString);

    const currentBalanceTotal=newDepositAmmount+prviousBalanceTotal;

    balanceTotal.innerText=currentBalanceTotal;
     dipositField.value='';
})