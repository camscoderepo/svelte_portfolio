<script>
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import Device from 'svelte-device-info';
  import { createEventDispatcher } from 'svelte';
  import { Modal ,getModalStore, initializeStores } from '@skeletonlabs/skeleton';

// Initialize stores
	initializeStores();

	const modalStore = getModalStore();
	let showModal = false;

	function closeModal() {
	showModal = false;
	}

	// Ensure modal is triggered correctly
	function triggerModal() {
	const modalSettings = {
		type: 'confirm',
		title: 'Test Modal',
		body: 'This is a test.',
		response: (r) => console.log('response:', r),
	};
	modalStore.trigger(modalSettings);
	}

  // const toggleNav = () => {
  //   isNavOpen = !isNavOpen;
  // };

  function handleButtonClick() {
    dispatch('openModal');
  }

  onMount(() => {
    isMobile = Device.isMobile;
    console.log('Is mobile:', isMobile); // Debugging: check device type
  });

  const modalBtnText = 'Contact Me';

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'schedule', text: 'Schedule Appointment' }
  ];
</script>

<nav class="bg-gray-800 p-4 z-20 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-white">Cameron Roman</div>

    <Button className="bg-white text-black py-2 px-4 rounded" on:click={triggerModal} buttonText={modalBtnText} />
    <Modal isOpen={showModal} onClose={closeModal}>
      <p>Simple modal content.</p>
    </Modal>
    

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
