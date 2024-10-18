// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || message === '') {
            event.preventDefault(); // Prevent form submission
            alert('Please fill out both the Name and Message fields.');
        } else {
            alert('Form submitted successfully!');
            // Reset the form fields after successful submission
            document.getElementById('name').value = '';
            document.getElementById('message').value = '';
        }
    });
});
