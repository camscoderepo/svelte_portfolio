<script>
  import { onMount } from 'svelte';
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';
  import Device from 'svelte-device-info';
 

  const contactBtnText = 'Contact';
  let showModal = false;
  let isNavOpen = false; // New variable to control nav visibility

  const navItems = [
    { id: 'home', text: 'Home'},
    { id: 'about', text: 'About'},
    { id: 'schedule', text: 'Schedule Appointment'}
  ];

  const toggleModal = () => {
      showModal = !showModal; // Toggles modal visibility
  };

  const toggleNav = () => {
      isNavOpen = !isNavOpen;
      console.log("isNavOpen:", isNavOpen); // Toggle nav visibility
  };

  let isMobile = false;
  onMount(() => {
    isMobile = Device.isMobile; // Directly assign the value
  });
</script>


<nav class="bg-gray-800 p-4 fixed top-0 left-0 right-0">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-white">Your Logo</div>
    <div class="hidden md:flex space-x-4">
      {#each navItems as item}
        <a href={`#${item.id}`} data-id={item.id} class="text-white hover:underline">
          {item.text}
        </a>
      {/each}
    </div>
    <div class="md:hidden">
      <button on:click={toggleNav} class="text-white">
        {#if isNavOpen}
          Close
        {:else}
          Menu
        {/if}
      </button>
    </div>
    <Button on:click={toggleModal} buttonText={contactBtnText} class="text-white bg-blue-500 px-4 py-2 rounded"/>
    <Modal isOpen={showModal} onClose={toggleModal} />
  </div>
  {#if isNavOpen && isMobile}
    <div class="md:hidden">
      <ul class="flex flex-col space-y-2">
        {#each navItems as item}
          <li>
            <a href={`#${item.id}`} data-id={item.id} class="text-white hover:underline block">
              {item.text}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>




<style>
 nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>