<script>
    import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar 
  gridColumns="grid-cols-3" 
  slotDefault="place-self-center" 
  slotTrail="place-content-end" 
  class="app-bar"
>
    <svelte:fragment slot="lead">
        <!-- Add your icon here -->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 12l9 9 9-9-9-9-9 9z"/>
        </svg>
    </svelte:fragment>
    <div class="title">My App</div>
    <svelte:fragment slot="trail">
        <!-- Add actions here, e.g., buttons or profile icon -->
        <button class="action-button">Login</button>
    </svelte:fragment>
</AppBar>

<style>
    .app-bar {
        background-color: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .icon {
        width: 24px;
        height: 24px;
        color: #007bff;
    }
    .title {
        font-size: 1.25rem;
        font-weight: bold;
        color: #343a40;
        text-align: center;
    }
    .action-button {
        background-color: #007bff;
        color: #ffffff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .action-button:hover {
        background-color: #0056b3;
    }
</style>
