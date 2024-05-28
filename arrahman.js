let normalTicketCount = 0;
let premiumTicketCount = 0;

const normalTicketPrice = 200; // Price for normal tickets
const premiumTicketPrice = 400; // Price for premium tickets

const normalTotalAmountElement = document.getElementById('totalAmount');
const premiumTotalAmountElement = document.getElementById('premiumTotalAmount');
const totalAmountElement2 = document.getElementById('eventtotalAmount');
const totalAmountElement3 = document.getElementById('eventAmount');
const totalAmountElement4 = document.getElementById('eventcharges');
const ticketCountElement = document.getElementById('ticketCount');
const premiumTicketCountElement = document.getElementById('premiumTicketCount');
const bookNowButton = document.getElementById('btn');
const extraCharges = document.getElementById('extra-charges').textContent;
let eventName = document.getElementById('event-place').textContent;

// Function to update total amount for normal tickets
function updateNormalTotalAmount() {
    const normalTotalAmount = normalTicketCount * normalTicketPrice;
    normalTotalAmountElement.textContent = `₹${normalTotalAmount}`;
}

// Function to update total amount for premium tickets
function updatePremiumTotalAmount() {
    const premiumTotalAmount = premiumTicketCount * premiumTicketPrice;
    premiumTotalAmountElement.textContent = `₹${premiumTotalAmount}`;
}

// Function to update total amount
function updateTotalAmount() {
    updateNormalTotalAmount();
    updatePremiumTotalAmount();

    const totalAmount = (normalTicketCount * normalTicketPrice) + (premiumTicketCount * premiumTicketPrice);
    totalAmountElement2.textContent = `₹${totalAmount}`;
    totalAmountElement3.textContent = `₹${totalAmount}`;
    totalAmountElement4.textContent = `₹${totalAmount + parseInt(extraCharges)}`; // Adding extra charges
}

// Event listener for adding normal tickets
document.getElementById('addTicket').addEventListener('click', function () {
    normalTicketCount++;
    ticketCountElement.textContent = normalTicketCount;
    updateNormalTotalAmount();
    updateTotalAmount();
});

// Event listener for subtracting normal tickets
document.getElementById('subtractTicket').addEventListener('click', function () {
    if (normalTicketCount > 0) {
        normalTicketCount--;
        ticketCountElement.textContent = normalTicketCount;
        updateNormalTotalAmount();
        updateTotalAmount();
    }
});

// Event listener for adding premium tickets
document.getElementById('addPremiumTicket').addEventListener('click', function () {
    premiumTicketCount++;
    premiumTicketCountElement.textContent = premiumTicketCount;
    updatePremiumTotalAmount();
    updateTotalAmount();
});

// Event listener for subtracting premium tickets
document.getElementById('subtractPremiumTicket').addEventListener('click', function () {
    if (premiumTicketCount > 0) {
        premiumTicketCount--;
        premiumTicketCountElement.textContent = premiumTicketCount;
        updatePremiumTotalAmount();
        updateTotalAmount();
    }
});

updateTotalAmount(); // Initialize total amount


// Initialize Razorpay options
const razorpayOptions = {
    key: Razorpay_API, // Replace with your Razorpay API key
    amount: 0, // Amount will be set dynamically
    currency: 'INR',
    name: eventName,
    description: 'Tickets',
    handler: function(response) {
        const paymentId = response.razorpay_payment_id; 
        const orderId = response.razorpay_order_id;
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // Here you can perform any action after successful payment
    },
};

// Function to open Razorpay checkout
function openRazorpayCheckout() {
    const total = (ticketCount * ticketPrice) + Number(extraCharges);
    razorpayOptions.amount = total * 100; // Razorpay amount is in paisa
    const razorpayInstance = new Razorpay(razorpayOptions); // Ensure Razorpay object is imported or defined
    razorpayInstance.open();
}

// Event listener for checkout button
bookNowButton.addEventListener("click", () => {
    openRazorpayCheckout();
});

// Event listener for booking button
bookNowButton.addEventListener('click', function (event) {
    event.preventDefault();
    ticketCount = parseInt(ticketCountElement.textContent);
    const totalPrice = parseInt(totalAmountElement4.textContent.slice(1)); // Remove ₹ sign
    const bookingData = {
        eventName: eventName,
        ticketCount: ticketCount,
        totalPrice: totalPrice,
        paymentStatus: 'Pending',
    };

    // Send booking data to backend server
    fetch('/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save payment and order');
        }
        return response.json();
    })
    .then((result) => {
        // console.log(result);
        const order = result;
        var options = {
            "key": "rzp_test_WQl0rEkfvWwGFq", 
            "amount": totalPrice * 100, 
            "currency": "INR",
            "name": eventName, 
            "order_id": order.id, 
            "handler": function (response){
                // Additional data to send to /booking/validate endpoint
                const validateData = {
                    
                    total_amount: totalPrice,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id : response.razorpay_order_id,
                    // razorpay_signature: response.razorpay_signature,
                    eventName: eventName,
                    ticketCount: ticketCountElement.textContent
                };
                
                // Make a fetch request to /booking/validate endpoint
                fetch("/booking/validate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(validateData)
                })
                .then((result) => {
                    // Handle the response from /booking/validate if needed
                    window.location = result.url;
                    console.log(result);
                })
                .catch(err => {
                    console.error('Error validating booking:', err);
                });
            }
        };
                
            var rzp1 = new window.Razorpay(options);
            ('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
            rzp1.open();
         
          
    })
    
    .catch(error => {
        console.error('Error booking tickets:', error);
    });
});
