  <script>
    export let title = "Welcome to Our Website!";
    export let subtitle = "We offer a variety of services to help you succeed.";
    export let buttonText = "Learn More";
    export let buttonUrl = "#";
</script>




<div class="flex flex-col items-center justify-center min-h-screen p-16 text-center bg-gradient-to-r from-purple-600 to-yellow-400 text-white">
    <h1 class="text-4xl mb-2 md:text-3xl sm:text-2xl">{title}</h1>
    <p class="text-xl mb-4 md:text-lg sm:text-base">{subtitle}</p>
    <a class="btn btn-white" href="{buttonUrl}">
        {buttonText}
    </a>
</div>
  
<style>
  .btn-white {
    background-color: white; /* Your desired color */
    color: black; /* Text color */
}
</style>