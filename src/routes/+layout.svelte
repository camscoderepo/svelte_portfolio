<script>
	// Import global styles
	import '../app.css';

	// Import components
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<!-- Page Layout -->
<Header />

<!-- Slot for page content -->
<slot />

<!-- Footer with props -->
<Footer email="camroman95@gmail.com" name="Cameron Roman" />
