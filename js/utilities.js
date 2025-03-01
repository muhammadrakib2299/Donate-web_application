function getInputFieldByButton(button){
    
    // Get the closest input field related to the clicked button
    return button.closest(".card").querySelector('input');

};

// Function to get the donation balance element in the clicked card
function getDonateStatusElement(button) {
    return button.closest(".card").querySelector('.donate-balance-status');
}


