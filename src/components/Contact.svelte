<section class="container">
    <div class="row">
      <div class="one-half column" style="margin: 0 auto; float: none;">
        <h2 class="u-full-width">Contact Us</h2>
        <form on:submit="{handleSubmit}">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            bind:value="{name}"
            placeholder="Your Name"
            class="u-full-width"
            required
          />
  
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            bind:value="{email}"
            placeholder="Your Email"
            class="u-full-width"
            required
          />
  
          <label for="message">Message</label>
          <textarea
            id="message"
            bind:value="{message}"
            placeholder="Your Message"
            class="u-full-width"
            required
            style="min-height: 100px;"
          ></textarea>
  
          <button type="submit" class="button-primary u-full-width" disabled="{isSubmitting}">
            {#if isSubmitting}Submitting...{/if}
            {#if !isSubmitting}Send Message{/if}
          </button>
  
          {#if formStatus}
            <div class="form-status {formStatus.includes('Error') ? 'error' : 'success'}">
              {formStatus}
            </div>
          {/if}
        </form>
      </div>
    </div>
  </section>
  
  <style>
    /* Reset and base styles */
    body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif; /* Replace 'Roboto' with your chosen Google font */
      line-height: 1.6;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
      font-family: 'Roboto', sans-serif; /* Replace 'Roboto' with your chosen Google font */
    }
  
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  
    label {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  
    input, textarea, button {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif; /* Replace 'Roboto' with your chosen Google font */
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
  
  <script>
    import { onMount } from 'svelte';
  
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
  