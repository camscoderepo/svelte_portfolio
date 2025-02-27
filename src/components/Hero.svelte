  <script>
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";
    // import coding from '$lib/assets/coding.mp4'
      const dispatch = createEventDispatcher();



      let currentPage = 'home';
      
      const handleHeroButtonClick = () => {
        currentPage = 'resume'; // Change to resume view once clicked
        dispatch('navigate', {page: currentPage})
      };

   

    export let title = "Welcome to my Website!";
    export let subtitle = "I offer a variety of services to take your project to the next level!";
    
</script>

<!-- <section class="relative overflow-hidden">
  <video
  autoplay
  muted
  loop
  class="absolute top-0 left-0 w-full h-full object-cover"
  >
  <source src="{coding}" type="video/mp4" />
  Your browser does not support the video tag.
  </video> -->
  <div id="home" class="flex flex-col items-center justify-center min-h-[95vh] p-16 text-center bg-background">
    <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="/../src/lib/assets/coding.mp4" type="video/mp4">
    </video>
      <h1 class="sm:text-2xl">{title}</h1>
      <p class="text-xl mb-4 md:text-lg sm:text-base">{subtitle}</p>
      <Button  onClick={handleHeroButtonClick}>Resume</Button>
  </div>
<!-- </section> -->