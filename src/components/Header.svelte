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


<nav class="bg-gray-100 dark:bg-gray-800 p-4 z-20 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-gray-800 dark:text-white">Cameron Roman</div>
    <LightSwitch />
    <Button onClick={openModal}>Contact Me</Button>
  </div>
</nav>

<style>

  /* Optional: Style adjustments for nav if needed */
</style>
