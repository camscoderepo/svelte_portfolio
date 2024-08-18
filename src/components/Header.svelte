<script>
  import { onMount } from 'svelte';
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';
  import Device from 'svelte-device-info';

  const modalBtnText = 'Contact Me';
  let showModal = false;
  let isNavOpen = false;
  let isMobile = false;

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'schedule', text: 'Schedule Appointment' }
  ];

  const toggleModal = () => {
    showModal = !showModal;
  };

  const toggleNav = () => {
    isNavOpen = !isNavOpen;
  };

  onMount(() => {
    isMobile = Device.isMobile;
  });

  // You don't need to call handleResize in a second onMount since it's already called above.
</script>


<nav class="bg-gray-800 p-4 z-20 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-white">Cameron Roman</div>
    
    <!-- Desktop Navigation -->
    <!-- <div class="hidden md:flex space-x-4">
      {#each navItems as item}
          <a href={`#${item.id}`} data-id={item.id} class="text-white hover:underline">
            {item.text}
          </a>
      {/each}
    </div> -->

    <Button className="bg-white text-black py-2 px-4 rounded" on:click={toggleModal} buttonText={modalBtnText} />

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

  <Modal isOpen={showModal} onClose={toggleModal} />
</nav>

<style>
  /* nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }


  .nav-items {
    display: none;
  }

  .nav-items.show {
    display: block;
  } */
</style>
