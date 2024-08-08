<script>
    import Modal from './Modal.svelte';
    import Button from './Button.svelte';


    const contactBtnText = 'Contact';

    
    let showModal = false;

    const navItems = [
      { id: 'home', text: 'Home'},
      { id: 'about', text: 'About'},
      { id: 'schedule', text: 'Schedule Appointment'}
    ]


    const toggleModal = () => {
    showModal = !showModal; // Toggles modal visibility
  };
</script>

<nav class="bg-gray-800 p-4 fixed top-0 left-0 right-0">
  <div class="mx-auto flex justify-between items-center">
    <div class="flex space-x-24"> <!-- Adjust space-x-8 as needed -->
      <div class="text-white">Your Logo</div>
      <ul class="flex space-x-4">
        {#each navItems as item}
        <li>
          <a href={`#${item.id}`} data-id={item.id} class="text-white hover:underline">
            {item.text}
          </a>
        </li>
      {/each}
      </ul>
    </div>
    <Button on:click={toggleModal} buttonText={contactBtnText} class="text-white bg-blue-500 px-4 py-2 rounded"/>
    <Modal isOpen={showModal} onClose={toggleModal} />
  </div>
</nav>



<style>
 nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>