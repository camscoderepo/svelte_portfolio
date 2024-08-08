<script>
    export let isOpen = false;
    export let onClose;
    let name = '';
    let email = '';
    let message = '';
    let isSubmitting = false;
    let formStatus = '';
    let modalRef;
    import Button from '../components/Button.svelte';
  
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
  
    function handleKeydown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
  
    $: if (isOpen && modalRef) {
      modalRef.focus();
    }
    function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  </script>
  
  <style>
    .modal-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
        display: flex;
        justify-content: center;
        align-items: center; /* Center modal vertically and horizontally */
        z-index: 1000; /* Ensure it's on top */
  }
    
    .modal-content {
        background-color: white; /* White background for content */
        border-radius: 8px; /* Rounded corners */
        padding: 16px; /* Padding inside the modal */
        max-width: 500px; /* Maximum width of the modal */
        width: 100%; /* Make it responsive */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add a shadow */
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
  </style>
  
  {#if isOpen}
  <div 
    bind:this={modalRef}
    on:click={handleOverlayClick}
    role="presentation"
    class="modal-overlay"
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    tabindex="-1"
    on:keydown={handleKeydown}
  >
    <div class="modal-content">
      <form on:submit|preventDefault={handleSubmit}>
        <h2 class="text-2xl font-bold text-center">Contact Us</h2>
                <label for="name" class="block text-left">Name</label>
                <input type="text" bind:value={name} placeholder="Your Name" class="border border-gray-300 rounded p-2 w-full" required />
                
                <label for="email" class="block text-left">Email</label>
                <input type="email" id="email" bind:value={email} placeholder="Your Email" class="border border-gray-300 rounded p-2 w-full" required />
                
                <label for="message" class="block text-left">Message</label>
                <textarea id="message" bind:value={message} placeholder="Your Message" class="border border-gray-300 rounded p-2 w-full" required style="min-height: 100px;"></textarea>
                
                <Button type="submit" class="button-primary mt-4 w-full" disabled={isSubmitting}>
                    {#if isSubmitting}Submitting...{/if}
                    {#if !isSubmitting}Send Message{/if}
                </Button>
        {#if formStatus}
          <div class={`form-status mt-4 text-center ${formStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {formStatus}
          </div>
        {/if}
      </form>
    </div>
  </div>
{/if}