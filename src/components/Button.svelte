<script>
    export let variant = 'default';
    export let buttonText = '';
    export let buttonUrl = "#"; // This can be used if you convert the button to an <a> tag.
</script>

<!-- Use an anchor tag if you want navigation -->
<button  class={`px-4 py-2 transition-colors duration-300 
    ${variant === 'special' ? 'bg-blue-500 text-white' : 
      variant === 'modal' ? 'bg-white text-gray-800 border border-gray-300' :
      'bg-gray-200 text-gray-800'}`} href={buttonUrl} on:click>
    <slot>{buttonText}</slot>
</button>

