document.addEventListener('DOMContentLoaded', () => {
    const eventpics = localStorage.getItem('eventpics') || 'img/default.png';
    const eventarea = localStorage.getItem('eventarea') || 'N/A';
    const totalAmount = localStorage.getItem('totalAmount') || '0';
    const ticketCount = localStorage.getItem('ticketCount') || '0';

    document.getElementById('cartImage').src = eventpics;
    document.getElementById('cartEventTitle').textContent = eventarea;
    document.getElementById('cartTotalAmount').textContent = `₹${totalAmount}`;
    document.getElementById('cartTicketCount').textContent = ticketCount;
});

