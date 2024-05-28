
document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("loginModal");
    const loginBtns = document.querySelectorAll("#loginBtn, #createEventBtn, .loginBtn");
    const closeBtn = document.querySelector(".close");
  
    loginBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        loginModal.style.display = "block";
      });
    });
  
    closeBtn.addEventListener("click", function() {
      loginModal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  });