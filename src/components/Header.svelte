<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { Modal ,getModalStore, initializeStores } from '@skeletonlabs/skeleton';
  import Device from 'svelte-device-info'; // If needed for mobile check\
  import Button from './Button.svelte';

  

    let isMobile = false;
    let showModal = false;
    const modalStore = getModalStore();
    export let isOpen = false;
    export let onClose;
    let isSubmitting = false;
    let formStatus = '';
    let modalRef;
    const formData = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hello, I need assistance!'
    };


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

    function handleClick() {
      openModal();
    }

   
  


  onMount(() => {
    isMobile = Device.isMobile;
    console.log('Is mobile:', isMobile); // Optional: check device type
  });


  const modalBtnText = 'Contact Me';


</script>


<nav class="bg-gray-800 p-4 z-20 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-white">Cameron Roman</div>

    <Button  on:click={handleClick} buttonText={modalBtnText} />
    

    <!-- Mobile Navigation Button -->
     <!-- {#if isMobile}
      <Button on:click={toggleNav} class="nav-items show md:hidden text-white">
        <i class="fas fa-bars"></i>
      </Button>
    {/if} -->
  </div>

  <!-- Mobile Navigation Menu -->
  <!-- {#if isNavOpen && isMobile}
    <ul class="nav-items show md:hidden space-y-2">
      {#each navItems as item}
        <li><a href={`#${item.id}`} class="text-white hover:underline">{item.text}</a></li>
      {/each}
    </ul>
  {/if} -->
</nav>

<style>

  /* Optional: Style adjustments for nav if needed */
</style>
