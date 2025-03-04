function getInputFieldByButton(button){
    // Get the closest input field related to the clicked button
    return button.closest(".card").querySelector('input');

};

// Function to get the donation balance element in the clicked card
function getDonateStatusElement(button) {
    return button.closest(".card").querySelector('.donate-balance-status');
}


// toggle feturs using function

function showSectionById(id){
    // Hide all section
    document.getElementById('donation-transecttion-section').classList.add('hidden');
    document.getElementById('donation-container-section').classList.add('hidden');

    // Show the section with provide id
    document.getElementById(id).classList.remove('hidden');
}