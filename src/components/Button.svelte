<script lang="ts">
    export let buttonText: string = '';
  </script>
  
  <button
    class="px-4 py-2 transition-colors duration-300 bg-gray-200 text-gray-800 rounded"
    on:click
    aria-label={buttonText}
  >
    {#if buttonText}
      {buttonText}
    {/if}
    <slot></slot> <!-- Allows for slot content if needed -->
  </button>
  
  <style>
    button {
      border: none;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #e0e0e0;
    }
  </style>
  