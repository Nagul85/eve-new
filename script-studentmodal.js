document.addEventListener('DOMContentLoaded', function() {
    const studentModal = document.getElementById('studentModal');
    const studentListItem = document.getElementById('student');
    const closeBtn = document.querySelector('.close-sub');

    if (studentListItem) {
        studentListItem.addEventListener('click', function() {
            studentModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            studentModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === studentModal) {
            studentModal.style.display = 'none';
        }
    });
});
