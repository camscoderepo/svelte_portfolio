<script>
    let name = '';
    let email = '';
    let message = '';
    let isSubmitting = false;
    let formStatus = '';
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      isSubmitting = true;
      formStatus = '';
  
      // Simulate form submission
      try {
        // You can replace this with actual form submission logic (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        formStatus = 'Your message has been sent successfully!';
        // Reset form fields
        name = '';
        email = '';
        message = '';
      } catch (error) {
        formStatus = 'There was an error sending your message. Please try again.';
      } finally {
        isSubmitting = false;
      }
    };
  </script>
  
  <style>
    .contact-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .contact-form {
      display: flex;
      flex-direction: column;
    }
  
    .form-group {
      margin-bottom: 1rem;
    }
  
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
  
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
  
    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }
  
    .form-group button {
      background: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.75rem;
      margin-top: 1rem;
      transition: background 0.3s ease;
    }
  
    .form-group button:hover {
      background: #0056b3;
    }
  
    .form-status {
      margin-top: 1rem;
      font-weight: bold;
    }
  
    .form-status.success {
      color: #28a745;
    }
  
    .form-status.error {
      color: #dc3545;
    }
  </style>
  
  <div class="contact-container">
    <h2>Contact Us</h2>
    <form class="contact-form" on:submit={handleSubmit}>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          bind:value={name}
          placeholder="Your Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="Your Email"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          bind:value={message}
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <button type="submit" disabled={isSubmitting}>
          {#if isSubmitting}Submitting...{/if}{#if !isSubmitting}Send Message{/if}
        </button>
      </div>
      {#if formStatus}
        <div class="form-status {formStatus.includes('error') ? 'error' : 'success'}">
          {formStatus}
        </div>
      {/if}
    </form>
  </div>
  