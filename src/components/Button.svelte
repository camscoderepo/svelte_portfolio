<script>
    export let buttonText = '';
    export let buttonUrl = "#";
</script>

<button class="btn btn-white" href="{buttonUrl}" on:click>
    <slot>{buttonText}</slot>
</button>

<style>
    .btn-white {
      background-color: white; /* Your desired color */
      color: black; /* Text color */
  }
  </style>