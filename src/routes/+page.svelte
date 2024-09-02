<script lang="ts">
  import AboutMe from '../components/AboutMe.svelte';
  import Consulting from '../components/Consulting.svelte';
  import Hero from '../components/Hero.svelte';
  import Resume from '../components/Resume.svelte'; // Import your Resume component

  let currentPage: string = 'home'; // Initialize with the default page

  function handleNavigation(event: CustomEvent) {
    const { page } = event.detail;
    currentPage = page; // Update currentPage based on the event detail
  }

</script>

<div>
  {#if currentPage === 'home'}
      <Hero 
          on:navigate={handleNavigation} 
      />
      <AboutMe on:navigate={handleNavigation} />
      <Consulting on:navigate={handleNavigation} />
  {:else if currentPage === 'resume'}
      <Resume on:navigate={handleNavigation} /> <!-- Render the Resume component -->
  {/if}
</div>
