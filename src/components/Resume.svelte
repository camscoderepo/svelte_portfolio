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
        <h1 class="text-4xl font-bold mb-6 text-center">Resume</h1>
        
        <!-- Contact Information -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Contact Information</h2>
            <ul>
                <li>Email: <a href="mailto:cameron.roman@icloud.com" class="text-blue-600 hover:underline">cameron.roman@icloud.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/cameron-roman-653865183" class="text-blue-600 hover:underline">linkedin.com/my-linkedin</a></li>
            </ul>
        </section>
        
        <!-- Summary -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-center">Summary</h2>
            <p>
                Dynamic software engineering professional with mid-level expertise in Web Development, Back End Development, and JavaScript. 
                Demonstrated success in managing and delivering complex technical projects, driving the development and implementation of diverse websites and business applications. 
                Skilled in creating bespoke software solutions to meet client-specific needs and enhance operational efficiency. 
            </p>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-center mb-4">Skills</h2>
            <div class="grid grid-cols-4 gap-4">
                <div class="text-center">JavaScript</div>
                <div class="text-center">React</div>
                <div class="text-center">SQL</div>
                <div class="text-center">Svelte</div>
                <div class="text-center">HTML</div>
                <div class="text-center">CSS</div>
                <div class="text-center">Node.js</div>
                <div class="text-center">GraphQL</div>
                <div class="text-center">Git</div>
                <div class="text-center">Docker</div>
                <div class="text-center">TypeScript</div>
                <div class="text-center">Redux</div>
                <div class="text-center">Tailwind CSS</div>
                <div class="text-center">Express</div>
                <div class="text-center">MongoDB</div>
                <div class="text-center">Python</div>
            </div>
        </section>
        
        
        <!-- Experience -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold">Experience</h2>
            <ul class="list-disc ml-5">
               <h2 class="text-pink-300 font-bold ">PurritoCoin, Denver - Owner/Software Developer</h2>
               <li></li>
               <li></li>
               <li></li>
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
