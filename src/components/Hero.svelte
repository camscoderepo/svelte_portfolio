  <script>
	  import Button from "./Button.svelte";
      import Resume from './Resume.svelte';
      import { createEventDispatcher } from "svelte";

      const dispatch = createEventDispatcher();

      let currentPage = 'home';
      
      const handleHeroButtonClick = () => {
        currentPage = 'resume'; // Change to resume view once clicked
        dispatch('navigate', {page: currentPage})
      };

   
    const heroBtnText = 'Resume';

    export let title = "Welcome to my Website!";
    export let subtitle = "I offer a variety of services to take your project to the next level!";
    
</script>


<div id="home" class="flex flex-col items-center justify-center min-h-[90vh] p-16 text-center bg-gradient-to-r from-purple-600 to-yellow-400 text-white">
    <h1 class="sm:text-2xl">{title}</h1>
    <p class="text-xl mb-4 md:text-lg sm:text-base">{subtitle}</p>
    <Button label="Hero Button" buttonText={heroBtnText} on:click={handleHeroButtonClick}></Button>
</div>