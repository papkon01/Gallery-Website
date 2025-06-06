try {
  document.querySelector('.mobile-tickets_btn').addEventListener('click', function () {
    window.location.href = '/tickets';
  });
} catch (e) {}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      burgerBtn.innerHTML = mobileNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>'  // "X" icon
        : '<i class="fas fa-bars"></i>';  // "☰" icon
    });
  } else {
    console.error('Mobile menu elements not found!');
  }
});


