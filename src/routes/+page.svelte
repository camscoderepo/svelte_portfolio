<script>
  import AboutMe from '../components/AboutMe.svelte';
  import Consulting from '../components/Consulting.svelte';
  import Hero from '../components/Hero.svelte';
  import Resume from '../components/Resume.svelte'; // Import your Resume component

  let currentPage = 'home'; // Track the current view

  const handleNavigation = (event) => {
    currentPage = event.detail.page; // Update the current page based on the event
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
