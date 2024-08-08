<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const handleBackClick = () => {
        dispatch('navigate', { page: 'home' });
    };
</script>

<style>
    /* Custom styles */
</style>

<div class="flex flex-col items-center justify-center min-h-screen">
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-4xl font-bold mb-6 text-center">Resume Component</h1>
        
        <!-- Contact Information -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Contact Information</h2>
            <ul>
                <li>Email: <a href="mailto:your-email@example.com" class="text-blue-600 hover:underline">your-email@example.com</a></li>
                <li>Phone: (123) 456-7890</li>
                <li>LinkedIn: <a href="https://linkedin.com/in/your-profile" class="text-blue-600 hover:underline">linkedin.com/in/your-profile</a></li>
            </ul>
        </section>
        
        <!-- Summary -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Summary</h2>
            <p>A brief summary of your qualifications, experience, and career goals.</p>
        </section>
        
        <!-- Experience -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Experience</h2>
            <ul class="list-disc ml-5">
                <!-- Experience items -->
            </ul>
        </section>
        
        <!-- Education -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Education</h2>
            <p><strong>Degree</strong>, Major - University Name (Year)</p>
        </section>
        
        <!-- Skills -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Skills</h2>
            <ul class="flex flex-wrap">
                <!-- Skill items -->
            </ul>
        </section>

        <!-- Back to Home Button -->
        <div class="text-center mt-6">
            <button 
                on:click={handleBackClick} 
                class="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition duration-200 ease-in-out"
            >
                Back to Home
            </button>
        </div>
    </div>
</div>
