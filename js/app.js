// Donate amount process by using donate button
document.getElementById('btn-donate').addEventListener('click', function(e){
    e.preventDefault();
    // get the amount user given the input fill
    const getDonateAmount = document.getElementById('input-donate-amount').value;
    // get the current donation amount status
    const donateAmountStatus = document.getElementById('donate-balance-status').innerText;
     // get user account balance status
     const acountAmount = document.getElementById('account-amount-status').innerText;

     if(getDonateAmount < acountAmount){
        if(getDonateAmount >= 0 && getDonateAmount > -getDonateAmount ){
            // additoin the given amount
            const updateAmountStatus = parseFloat(donateAmountStatus) + parseFloat(getDonateAmount);
            document.getElementById('donate-balance-status').innerText = updateAmountStatus; 
            document.getElementById('input-donate-amount').value = ' ';
    
            const updateAcountSatus = acountAmount - getDonateAmount
            document.getElementById('account-amount-status').innerText = updateAcountSatus;

        }
        else{
            alert("Donation do not sucessful, Try again")
        }
     }
     else{
        alert('your balance is low');
     }


    

})