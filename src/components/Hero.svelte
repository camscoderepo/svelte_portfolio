  <script>
	  import Button from "./Button.svelte";


    const handleHeroButtonClick = () => {
        // Define what happens when the hero button is clicked
        console.log('Hero button clicked');
    };

    const heroBtnUrl = '';
    const heroBtnText = 'Learn more';

    export let title = "Welcome to Our Website!";
    export let subtitle = "We offer a variety of services to help you succeed.";
    
</script>




<div id="home" class="flex flex-col items-center justify-center min-h-screen p-16 text-center bg-gradient-to-r from-purple-600 to-yellow-400 text-white">
    <h1 class="text-4xl mb-2 md:text-3xl sm:text-2xl">{title}</h1>
    <p class="text-xl mb-4 md:text-lg sm:text-base">{subtitle}</p>
    <Button label="Hero Button" buttonText={heroBtnText} on:click={handleHeroButtonClick} buttonUrl={heroBtnUrl}></Button>
</div>