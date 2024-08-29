<script lang="ts">
  import { onMount } from 'svelte';
  import Device from 'svelte-device-info'; // If needed for mobile check\
  import Button from './Button.svelte';
  import Modal from './Modal.svelte';
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';

  

    let isMobile = false;
    
    const modalStore = getModalStore();

    const modalComponent: ModalComponent = { ref: Modal };

    function openModal() {
      const modal: ModalSettings = {
      type: 'component',
      component: modalComponent,
      title: 'Contact Me here',
      body: 'Fill out the form below'
    };
    modalStore.trigger(modal);
    }
    



   
  


  onMount(() => {
    isMobile = Device.isMobile;
    console.log('Is mobile:', isMobile); // Optional: check device type
  });


  const modalBtnText = 'Contact Me';


</script>


<nav class="bg-gray-300 dark:bg-gray-800 p-4 z-20 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-gray-800 dark:text-white">Cameron Roman</div>

    <!-- <Button on:click={openModal} buttonText={modalBtnText} /> -->
    <LightSwitch />

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
