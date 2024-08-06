<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import Modal from './Modal.svelte';
    import Button from './Button.svelte';


    const contactBtnText = 'Contact';

    
    let showModal = false;




    const toggleModal = () => {
    showModal = !showModal; // Toggles modal visibility
  };


</script>


<nav class="bg-gray-800 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center space-x-24"> <!-- Adjust space-x-8 as needed -->
      <div class="text-white">Your Logo</div>
      <ul class="flex space-x-4">
        <li><a href="#hero" class="text-white hover:underline">Home</a></li>
        <li><a href="#about" class="text-white hover:underline">About Me</a></li>
        <li><a href="#pricing" class="text-white hover:underline">Pricing</a></li>
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