<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import Modal from './Modal.svelte';

    let isModalOpen = false;

    const openModal = () => {
    isModalOpen = true;
    };

    const closeModal = () => {
    isModalOpen = false;
    };
</script>


<nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white">Your Logo</div>
      <button class="text-white bg-blue-500 px-4 py-2 rounded" on:click={openModal}>
        Contact
      </button>
    </div>
</nav>

<Modal isOpen={isModalOpen} onClose={closeModal} />

<style>

</style>
