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

      try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          formStatus = 'Your message has been sent successfully!';
          name = '';
          email = '';
          message = '';
      } catch (error) {
          formStatus = 'Error sending your message.';
      } finally {
          isSubmitting = false;
      }
  };
</script>

<style>
  body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .contact-section {
      width: 100%;
      background: linear-gradient(135deg, #6b5b95, #feb236);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
  }

  .contact-container {
      max-width: 700px;
      width: 100%;
      background: white;
      color: #333;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 2rem;
  }

  .contact-container h2 {
      color: #6b5b95;
      margin-bottom: 1.5rem;
  }

  .contact-form {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .form-group {
      width: 100%;
      margin-bottom: 1rem;
  }

  .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
  }

  .form-group input,
  .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      text-align: center;
  }

  .form-group input:focus,
  .form-group textarea:focus {
      border-color: #feb236;
      outline: none;
  }

  .form-group textarea {
      resize: vertical;
      min-height: 100px;
  }

  .form-group button {
      background: #f7f7f7;
      border: none;
      color: white;
      border-radius: 4px;
      padding: 0.75rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s, transform 0.2s;
      margin-top: 1rem;
  }

  .form-group button:disabled {
      background: #aaa;
      cursor: not-allowed;
  }

  .form-group button:hover {
      background: #ffb447;
      transform: translateY(-2px);
  }

  .form-status {
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
      font-weight: bold;
  }

  .form-status.success {
      color: #28a745;
      background-color: #e7f8e9;
      border: 1px solid #c3e6cb;
  }

  .form-status.error {
      color: #dc3545;
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
  }
</style>

<section class="contact-section">
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
</section>
