<script>
	// Import global styles
	import '../app.css';
	// Import components
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Modal from '../components/Modal.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	// Stores
	import { getModalStore, initializeStores  } from '@skeletonlabs/skeleton';

	injectSpeedInsights();
	initializeStores();

</script>

<main>
	<Header  />
	<Modal />
	<!-- Slot for page content -->
	<slot />



	<!-- Footer with props -->
	<Footer email="cameron.roman@icloud.com" name="Cameron Roman" />
</main>


