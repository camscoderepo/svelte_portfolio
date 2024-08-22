<script lang="ts">
  import { onMount } from 'svelte';
  import { getModalStore, initializeStores, ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
  import Modal from './Modal.svelte'; // Import the custom modal component
  import Device from 'svelte-device-info'; // If needed for mobile check\
  import Button from './Button.svelte';
  // Initialize modal store
  initializeStores();
  const modalStore = getModalStore();

  // Defining the ModalComponent type locally
  interface ModalComponent {
    ref: typeof Modal;
  }
  interface ModalSettings {
    type: 'component';
    component: ModalComponent;
  }

  const modalComponent: ModalComponent = { ref: Modal };

  const modal: ModalSettings = {
    type: 'component',
    component: modalComponent,
  };

  function openModal() {
    modalStore.trigger(modal);
  }

  let isMobile: boolean = false;

  onMount(() => {
    isMobile = Device.isMobile;
    console.log('Is mobile:', isMobile); // Optional: check device type
  });

  const modalBtnText = 'Contact Me';
  const navItems: { id: string; text: string }[] = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'schedule', text: 'Schedule Appointment' }
  ];
</script>


<nav class="bg-gray-800 p-4 z-20 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-white">Cameron Roman</div>

    <Button  onClick={openModal} buttonText={modalBtnText} />
    

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
