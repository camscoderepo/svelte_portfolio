<script lang="ts">
  export let onClick: (event: MouseEvent) => void;
</script>
  



  <button type="button" class="btn btn-lg variant-filled-secondary" on:click={onClick}>
    <slot></slot>
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
  