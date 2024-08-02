<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import Modal from './Modal.svelte';
    import Button from './Button.svelte';


    const contactBtnText = 'Contact';

    
    let showModal = false;




    const toggleModal = () => {
    showModal = !showModal; // Toggles modal visibility
  };

  const handleContactButtonClick = () => {
        console.log('Contact button clicked');
        showModal = true;
    };
</script>


<nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white">Your Logo</div>
      <Button on:click={toggleModal}  buttonText={contactBtnText}  class="text-white bg-blue-500 px-4 py-2 rounded">
      </Button>
      <Modal isOpen={showModal} onClose={toggleModal}>
      </Modal>
    </div>
</nav>



<style>

</style>
