<script>
    export let className = '';
    export let buttonText = '';
    export let buttonUrl = "#"; // This can be used if you convert the button to an <a> tag.
</script>

<!-- Use an anchor tag if you want navigation -->
<a  class={`btn btn-white ${className}`} href={buttonUrl} on:click>
    <slot>{buttonText}</slot>
</a>

<style>
    .btn-white {
        background-color: white; /* Your desired color */
        color: black; /* Text color */
        padding: 0.5rem 1rem; /* Add some padding */
        border-radius: 0.25rem; /* Rounded corners */
        text-decoration: none; /* Remove underline */
        display: inline-block; /* Allow width and height adjustments */
    }
</style>