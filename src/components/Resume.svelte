<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const handleBackClick = () => {
        dispatch('navigate', { page: 'home' }); // Emit an event to navigate back to home
    };
</script>

<div>
    <h1>Resume Component</h1>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold mb-4 text-center">My Resume</h2>
        
        <div class="mb-6">
            <h3 class="text-2xl font-semibold">Contact Information</h3>
            <p>Email: <a href="mailto:your-email@example.com" class="text-blue-600 hover:underline">your-email@example.com</a></p>
            <p>Phone: (123) 456-7890</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" class="text-blue-600 hover:underline">linkedin.com/in/your-profile</a></p>
        </div>
        
        <div class="mb-6">
            <h3 class="text-2xl font-semibold">Summary</h3>
            <p>A brief summary of your qualifications, experience, and career goals.</p>
        </div>
        
        <div class="mb-6">
            <h3 class="text-2xl font-semibold">Experience</h3>
            <ul class="list-disc ml-5">
                <li>
                    <strong>Job Title</strong>, Company Name (Year - Year)
                    <ul class="list-disc ml-5">
                        <li>Key responsibility or achievement.</li>
                        <li>Another responsibility or achievement.</li>
                    </ul>
                </li>
                <!-- Add more work experiences as needed -->
            </ul>
        </div>
        
        <div class="mb-6">
            <h3 class="text-2xl font-semibold">Education</h3>
            <p><strong>Degree</strong>, Major - University Name (Year)</p>
        </div>
        
        <div class="mb-6">
            <h3 class="text-2xl font-semibold">Skills</h3>
            <ul class="flex flex-wrap">
                <li class="bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">Skill 1</li>
                <li class="bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">Skill 2</li>
                <li class="bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">Skill 3</li>
                <!-- Add more skills as needed -->
            </ul>
        </div>
        
        <button class="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Back to Home
        </button>
    </div>
    <button on:click={handleBackClick}>Back to Home</button>
</div>
