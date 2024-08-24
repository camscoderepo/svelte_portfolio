<script>
	// Import global styles
	import '../app.css';
	// Import components
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Modal from '../components/Modal.svelte';
	import { onMount, onDestroy } from 'svelte';
	// Stores
	import { getModalStore, initializeStores  } from '@skeletonlabs/skeleton';

	initializeStores();

	const modalStore = getModalStore();

	//You can define the parent props here, which will be passed to the modal
	const parent = {
		buttonTextCancel: 'Cancel',
		buttonTextSubmit: 'Submit',
		onClose: () => modalStore.close(),
		regionFooter: 'modal-footer=class',
		buttonNeutral: 'btn-neutral-class',
		buttonPositive: 'btn-positive-class'
	};

	function openModal() {
		modalStore.open({
	
			title: 'Contact Form',
			body:'Fill out the form below:',
			response: (data) => console.log('Form submitted:', data)
		})
	}
		// Props
	/** Exposes parent props to this component. */
</script>

<main>
	<Header {openModal} />
	<Modal />
	<!-- Slot for page content -->
	<slot />



	<!-- Footer with props -->
	<Footer email="cameron.roman@icloud.com" name="Cameron Roman" />
</main>


