document.querySelector('.newsletter-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);
    
    // Send form data to Formspree
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    // Handle response
    if (response.ok) {
        form.reset(); // Clear the form
        document.getElementById('form-success-message').style.display = 'block';
    } else {
        alert('There was an error submitting the form. Please try again.');
    }

    
});
