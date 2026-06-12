function showMessage() {
  alert("Welcome to Aayan Syed's Portfolio!");
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const feedbackEl = document.getElementById('contact-feedback');

  if (!form || !feedbackEl) {
    return;
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    feedbackEl.textContent = 'Sending message...';
    feedbackEl.style.color = '#00adb5';

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    try {
      // Change this URL to your server's address when deployed
      const backendUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/send-email'
        : '/api/send-email'; // For production, adjust as needed

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      feedbackEl.textContent = '✓ Message sent successfully! Thank you for contacting me.';
      feedbackEl.style.color = '#00ff88';
      form.reset();

      // Keep the success message visible for 5 seconds
      setTimeout(() => {
        feedbackEl.textContent = '';
      }, 5000);
    } catch (error) {
      console.error('Form submit error:', error);
      feedbackEl.textContent = '✗ Failed to send message. Please try again or email me directly at Aayan.muhammad@ada.ac.uk';
      feedbackEl.style.color = '#ff6b6b';
    }
  });
});
