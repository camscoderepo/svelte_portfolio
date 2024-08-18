<script>
    
    export let buttonText = '';
    export let buttonUrl = "#"; // This can be used if you convert the button to an <a> tag.
</script>

<!-- Use an anchor tag if you want navigation -->
<button  class={`bg-primary`} href={buttonUrl} on:click>
    <slot>{buttonText}</slot>
</button>

