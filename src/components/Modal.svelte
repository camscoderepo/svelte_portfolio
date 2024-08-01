<script>
  export let isOpen = false;
  export let onClose = () => {};
  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let formStatus = '';

  const handleSubmit = async () => {
      isSubmitting = true;
      formStatus = '';

      try {
          // Simulate form submission
          await new Promise(resolve => setTimeout(resolve, 2000));
          formStatus = 'Message sent successfully!';
      } catch (error) {
          formStatus = 'Error sending message. Please try again.';
      } finally {
          isSubmitting = false;
      }
  };
</script>

<style>
  dialog {
      border: none; /* Remove default border */
      border-radius: 8px; /* Rounded corners */
      padding: 0; /* Reset padding */
      background-color: transparent; /* Transparent background for overlay */
  }

  .modal-overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  }

  .modal-content {
      background-color: white; /* White background for content */
      border-radius: 8px; /* Rounded corners */
      padding: 16px; /* Padding inside the modal */
      max-width: 500px; /* Maximum width of the modal */
      margin: auto; /* Center modal */
  }
  .close-button {
        position: absolute;
        top: 10px; /* Adjust the position as needed */
        right: 10px; /* Adjust the position as needed */
        background: none; /* Remove background */
        border: none; /* Remove border */
        font-size: 1.5rem; /* Adjust size */
        cursor: pointer; /* Change cursor to pointer */
    }

  /* You can add additional styles for inputs, buttons, etc. */
</style>

{#if isOpen}
    <dialog open class="modal-overlay">
        <div class="modal-content">
            <button class="close-button" on:click={onClose} aria-label="Close Modal">✖</button>
            <form on:submit|preventDefault={handleSubmit}>
                <h2 class="text-2xl font-bold text-center">Contact Us</h2>
                <label for="name" class="block text-left">Name</label>
                <input type="text" bind:value={name} placeholder="Your Name" class="border border-gray-300 rounded p-2 w-full" required />
                
                <label for="email" class="block text-left">Email</label>
                <input type="email" id="email" bind:value={email} placeholder="Your Email" class="border border-gray-300 rounded p-2 w-full" required />
                
                <label for="message" class="block text-left">Message</label>
                <textarea id="message" bind:value={message} placeholder="Your Message" class="border border-gray-300 rounded p-2 w-full" required style="min-height: 100px;"></textarea>
                
                <button type="submit" class="button-primary mt-4 w-full" disabled={isSubmitting}>
                    {#if isSubmitting}Submitting...{/if}
                    {#if !isSubmitting}Send Message{/if}
                </button>

                {#if formStatus}
                    <div class={`form-status mt-4 text-center ${formStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {formStatus}
                    </div>
                {/if}
            </form>
        </div>
    </dialog>
{/if}

