<script>
	// Import global styles
	import '../app.css';
	// Import components
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	
</script>

<main>
	<Header />
	<!-- Slot for page content -->
	<slot />

	<!-- Footer with props -->
	<Footer email="cameron.roman@icloud.com" name="Cameron Roman" />
</main>


