document.querySelector('.footer-right form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Gather form data
    const email = document.querySelector('.footer-right input').value;
    const message = document.querySelector('.footer-right textarea').value;
  
    // Basic validation
    if (email && message) {
      alert('Thank you for your feedback!');
    } else {
      alert('Please fill in both fields.');
    }
  });
  
  