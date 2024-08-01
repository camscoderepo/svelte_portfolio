<!-- <script>
    
  
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
  
<section class="container mx-auto py-8">
  <div class="flex justify-center">
    <div class="max-w-*">
      <h2 class="text-center text-2xl font-bold">Contact Us</h2>

      <label for="name" class="block text-left">Name</label>
      <input
        type="text"
        id="name"
        bind:value={name}
        on:input={(e) => handleInputChange(e, 'name')}
        placeholder="Your Name"
        class="u-full-width border border-gray-300 rounded p-2"
        required
      />

      <label for="email" class="block text-left">Email</label>
      <input
        type="email"
        id="email"
        bind:value={email}
        on:input={(e) => handleInputChange(e, 'email')}
        placeholder="Your Email"
        class="u-full-width border border-gray-300 rounded p-2"
        required
      />

      <label for="message" class="block text-left">Message</label>
      <textarea
        id="message"
        bind:value={message}
        on:input={(e) => handleInputChange(e, 'message')}
        placeholder="Your Message"
        class="u-full-width border border-gray-300 rounded p-2"
        required
        style="min-height: 100px;"
      ></textarea>

      <div class="flex justify-center mt-4">
        <button type="button" class="button-primary u-full-width" on:click={handleSubmit} disabled={isSubmitting}>
          {#if isSubmitting}Submitting...{/if}
          {#if !isSubmitting}Send Message{/if}
        </button>
      </div>

      {#if formStatus}
        <div class="form-status mt-4 text-center {formStatus.includes('Error') ? 'error' : 'success'}">
          {formStatus}
        </div>
      {/if}
    </div>
  </div>
</section>

  
  
  <style>
    /* You can add any additional styles here */
  </style>
   -->