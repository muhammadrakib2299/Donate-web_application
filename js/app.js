// Get all donate now buttons
const buttons = document.querySelectorAll(".donate-btn");

// Donation process
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page reload

         // Get the input field and donation amount from the clicked card
         const inputField = getInputFieldByButton(button);
         const donateAmount = parseFloat(inputField.value) || 0;

        // Get account balance
        const accountAmount = parseFloat(document.getElementById('account-amount-status').innerText) || 0;

        // Find the corresponding donate status element in the clicked section
        const donateStatusElement = getDonateStatusElement(button);
        const currentDonateStatus = parseFloat(donateStatusElement.innerText) || 0;

        // Apply conditions
        if (donateAmount > 0 && donateAmount <= accountAmount) {
            const updatedAmount = currentDonateStatus + donateAmount;
            donateStatusElement.innerText = updatedAmount; // Update UI

            // Deduct the donation amount from the user's balance
            document.getElementById('account-amount-status').innerText = (accountAmount - donateAmount).toFixed(2);
            // Clear the input field after successful donation
            inputField.value = '';

            // Add to transection history
            const dateTime = new Date();
            const div = document.createElement('div');
                div.innerHTML = `
                    <h1> Donate Status: ${donateAmount} Taka is donated.</h1> 
                    <p> Date: ${dateTime} </p>
            `
            div.classList.add('transection-history');
            document.getElementById('transection-container').appendChild(div);

        } else {
            alert("Donation unsuccessful. Please enter a valid amount.");
        }
    });
});


// get the donation button
document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation-container-section');
});

// Get the History function
document.getElementById('history-btn').addEventListener('click', function(){

    showSectionById('donation-transecttion-section');
});