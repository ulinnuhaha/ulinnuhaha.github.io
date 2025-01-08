// Optional: Add animations or event listeners for future interactivity
document.addEventListener("DOMContentLoaded", function() {
  // Example: Changing text color on hover
  const cardLinks = document.querySelectorAll('.card-title a');
  cardLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#45a049';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#4CAF50';
    });
  });
});
