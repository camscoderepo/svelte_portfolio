<!-- <script>
	import Button from "./Button.svelte";

    export let isOpen = false;
    export let onClose;
    let name = '';
    let email = '';
    let message = '';
    let isSubmitting = false;
    let formStatus = '';
    let modalRef;
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
      /* Ensure the modal content is properly centered */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-radius: 8px; /* Adjust as needed */
      background-color: #f9f9f9; /* Adjust to match your design */
    }
    
    .modal-content button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px; /* Ensure rounded corners */
      padding: 10px 20px; /* Adjust as needed */
      box-shadow: none; /* Remove box-shadow if it feels out of place */
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
        <h2 class="text-2xl font-bold text-center">Contact me</h2>
                <label for="name" class="block text-center">Name</label>
                <input type="text" bind:value={name} placeholder="Your Name" class="border border-gray-300 rounded p-2 w-full" required />
                
                <label for="email" class="block text-center">Email</label>
                <input type="email" id="email" bind:value={email} placeholder="Your Email" class="border border-gray-300 rounded p-2 w-full" required />
                
                <label for="message" class="block text-center">Message</label>
                <textarea id="message" bind:value={message} placeholder="Your Message" class="border border-gray-300 rounded p-2 w-full" required style="min-height: 100px;"></textarea>
                <div class="modal-content">
                  <Button variant="modal" type="submit" className="button-primary mt-4 w-full text-center" disabled={isSubmitting}>
                    {#if isSubmitting}Submitting...{/if}
                    {#if !isSubmitting}Send Message{/if}
                  </Button>
                </div>
               
        {#if formStatus}
          <div class={`form-status mt-4 text-center ${formStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {formStatus}
          </div>
        {/if}
      </form>
    </div>
  </div>
{/if} -->