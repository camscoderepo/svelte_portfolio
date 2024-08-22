<script lang="ts">
    export let buttonText = '';
    export let onClick: (() => void) | undefined;
</script>

<!-- Use an anchor tag if you want navigation -->
<button  class={`px-4 py-2 transition-colors duration-300 bg-gray-200 text-gray-800`}  on:click={onClick}>
    <slot>{buttonText}</slot>
</button>

