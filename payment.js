// let normalTicketCount = 0;
// let premiumTicketCount = 0;

// const normalTicketPrice = 200; // Price for normal tickets
// const premiumTicketPrice = 400; // Price for premium tickets

// const normalTotalAmountElement = document.getElementById('totalAmount');
// const premiumTotalAmountElement = document.getElementById('premiumTotalAmount') || 0;
// const totalAmountElement2 = document.getElementById('eventtotalAmount');
// const totalAmountElement3 = document.getElementById('eventAmount');
// const totalAmountElement4 = document.getElementById('eventcharges');
// const ticketCountElement = document.getElementById('ticketCount');
// const premiumTicketCountElement = document.getElementById('premiumTicketCount') || 0;
// const bookNowButton = document.getElementById('btn');
// const extraCharges = document.getElementById('extra-charges').textContent;
// let eventName = document.getElementById('event-place').textContent;

// // Function to update total amount for normal tickets
// function updateNormalTotalAmount() {
//     const normalTotalAmount = normalTicketCount * normalTicketPrice;
//     normalTotalAmountElement.textContent = `₹${normalTotalAmount}`;
// }

// // Function to update total amount for premium tickets
// function updatePremiumTotalAmount() {
//     const premiumTotalAmount = premiumTicketCount * premiumTicketPrice;
//     premiumTotalAmountElement.textContent = `₹${premiumTotalAmount}`;
// }

// // Function to update total amount
// function updateTotalAmount() {
//     updateNormalTotalAmount();
//     updatePremiumTotalAmount();

//     const totalAmount = (normalTicketCount * normalTicketPrice) + (premiumTicketCount * premiumTicketPrice);
//     totalAmountElement2.textContent = `₹${totalAmount}`;
//     totalAmountElement3.textContent = `₹${totalAmount}`;
//     totalAmountElement4.textContent = `₹${totalAmount + parseInt(extraCharges)}`; // Adding extra charges

//     // Store the total amount in localStorage
//     localStorage.setItem("totalAmount", totalAmount);
    

//     // Calculate total amount with charges (assuming extraCharges is already defined)
//     const totalAmountWithCharges = totalAmount + parseInt(extraCharges);

//     // Store the total amount with charges in localStorage
//     localStorage.setItem("totalAmountWithCharges", totalAmountWithCharges);
   
// }

// // Event listener for adding normal tickets
// document.getElementById('addTicket').addEventListener('click', function () {
//     normalTicketCount++;
//     ticketCountElement.textContent = normalTicketCount;
//     updateNormalTotalAmount();
//     updateTotalAmount();
// });

// // Event listener for subtracting normal tickets
// document.getElementById('subtractTicket').addEventListener('click', function () {
//     if (normalTicketCount > 0) {
//         normalTicketCount--;
//         ticketCountElement.textContent = normalTicketCount;
//         updateNormalTotalAmount();
//         updateTotalAmount();
//     }
// });

// updateTotalAmount(); // Initialize total amount




 
// Sooria Script 

let ticketCount = 0;
const ticketPrice = 200;
const totalAmountElement = document.getElementById('totalAmount');
const totalAmountElement2 = document.getElementById('eventtotalAmount');
const totalAmountElement3 = document.getElementById('eventAmount');
const totalAmountElement4 = document.getElementById('eventcharges');
const ticketCountElement = document.getElementById('ticketCount');
const eventVenueElement = document.getElementById('eventarea');
const eventpicture = document.getElementById('eventpics');
const eventdateandday = document.getElementById('eventday');
const extra = document.getElementById('exchr');
const eventlocation = document.getElementById('location');


function updateTotalAmount() {
    const totalAmount = ticketCount * ticketPrice;
    const totalAmountWithCharges = totalAmount + 25; // Calculate total amount including extra charges
    const eventarea = eventVenueElement.textContent;
    const eventpics = eventpicture.src;
    const eventday = eventdateandday.textContent;
    const exchr = extra.textContent;
    const location = eventlocation.textContent;

    totalAmountElement.textContent = `₹${totalAmount}`;
    totalAmountElement2.textContent = `₹${totalAmount}`;
    totalAmountElement3.textContent = `₹${totalAmount}`;
    totalAmountElement4.textContent = `₹${totalAmountWithCharges}`;

    // Save ticket count, total amount, and event venue to local storage
    localStorage.setItem('ticketCount', ticketCount);
    localStorage.setItem('totalAmount', totalAmount);
    localStorage.setItem('totalAmountWithCharges', totalAmountWithCharges);
    localStorage.setItem('eventarea', eventarea);
    localStorage.setItem('eventpics', eventpics);
    localStorage.setItem('eventday', eventday);
    localStorage.setItem('exchr', exchr);
    localStorage.setItem('location', location);
    

}

document.getElementById('addTicket').addEventListener('click', function() {
    ticketCount++;
    ticketCountElement.textContent = ticketCount;
    updateTotalAmount();
});

document.getElementById('subtractTicket').addEventListener('click', function() {
    if (ticketCount > 0) {
        ticketCount--;
        ticketCountElement.textContent = ticketCount;
        updateTotalAmount();
    }
});

updateTotalAmount(); // Initialize total amount

// Display the image if it exists in local storage on page load
window.onload = function() {
    displayImage();
    ticketCount = parseInt(localStorage.getItem('ticketCount')) || 0;
    ticketCountElement.textContent = ticketCount;
    updateTotalAmount();
};
// localStorage.js

// Function to convert image file to base64 string
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

// Function to handle image upload and store in local storage
async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        try {
            const base64String = await toBase64(file);
            localStorage.setItem('eventpics', base64String);
            displayImage();
        } catch (error) {
            console.error('Error converting image to base64:', error);
        }
    }
}

// Function to display the image stored in local storage
function displayImage() {
    const base64String = localStorage.getItem('eventpics');
    if (base64String) {
        const imgElement = document.getElementById('eventpics');
        imgElement.src = base64String;
    }
}

// Set up the event listener for the file input
document.getElementById('imageInput').addEventListener('change', handleImageUpload);

// Display the image if it exists in local storage on page load
window.onload = displayImage;
