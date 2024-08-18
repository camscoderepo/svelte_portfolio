<script>
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";
    const dispatch = createEventDispatcher();

    const handleBackClick = () => {
        dispatch('navigate', { page: 'home' });
    };
</script>

<style>
    /* Optional custom styles for the container */
    .container {
        max-width: 1200px; /* Adjust as needed */
        margin: 60px auto;
        padding: 1rem;
        box-sizing: border-box;
    }

    /* Dark mode styles */
    @media (prefers-color-scheme: dark) {
        .bg-dark {
            background-color: #1f2937; /* Dark gray background */
        }
        .text-dark {
            color: #e5e7eb; /* Light gray text for better readability */
        }
    }
</style>

<div class="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col">
    <div class="container p-6 mb-6">
        <h1 class="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Resume</h1>

        <!-- Contact Information -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Contact Information</h2>
            <ul>
                <li>Email: <a href="mailto:cameron.roman@icloud.com" class="text-blue-600 hover:underline dark:text-blue-400">cameron.roman@icloud.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/cameron-roman-653865183" class="text-blue-600 hover:underline dark:text-blue-400">linkedin.com/my-linkedin</a></li>
            </ul>
        </section>

        <!-- Summary -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Summary</h2>
            <p class="text-gray-800 dark:text-gray-300">
                Dynamic software engineering professional with mid-level expertise in Web Development, Back End Development, and JavaScript. 
                Demonstrated success in managing and delivering complex technical projects, driving the development and implementation of diverse websites and business applications. 
                Skilled in creating bespoke software solutions to meet client-specific needs and enhance operational efficiency.
            </p>
        </section>

        <!-- Skills -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
            <div class="grid grid-cols-4 gap-4">
                <div class="text-center text-gray-800 dark:text-gray-300">JavaScript</div>
                <div class="text-center text-gray-800 dark:text-gray-300">React</div>
                <div class="text-center text-gray-800 dark:text-gray-300">SQL</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Svelte</div>
                <div class="text-center text-gray-800 dark:text-gray-300">HTML</div>
                <div class="text-center text-gray-800 dark:text-gray-300">CSS</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Node.js</div>
                <div class="text-center text-gray-800 dark:text-gray-300">GraphQL</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Git</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Docker</div>
                <div class="text-center text-gray-800 dark:text-gray-300">TypeScript</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Redux</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Tailwind CSS</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Express</div>
                <div class="text-center text-gray-800 dark:text-gray-300">MongoDB</div>
                <div class="text-center text-gray-800 dark:text-gray-300">Python</div>
            </div>
        </section>

        <!-- Experience -->
        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Experience</h2>
            <ul class="list-disc ml-5 text-gray-800 dark:text-gray-300">
                <h3 class="text-pink-400 font-bold">PurritoCoin, Denver - Owner/Software Developer</h3>
                <li>Managed the full project lifecycle, ensuring high standards and timely completion of deliverables</li> 
                <li>Achieved a 100% increase in revenue through strategic implementation of small, high-impact projects</li>
                <li>Led PurritoCoin as founder, overseeing operations and driving business growth</li>
            </ul>
            <ul class="list-disc ml-5 text-gray-800 dark:text-gray-300">
                <h3 class="text-pink-400 font-bold">OSR Referrals, Remote - Co-Founder/Software Developer</h3>
                <li>Developed the entire front-end using templates and React, achieving a Lighthouse score above 95 and optimizing SEO performance</li> 
                <li>Integrated front-end with back-end using APIs and database connections</li>
                <li>Independently coded to client specifications, receiving positive reviews for meeting expectations</li>
            </ul>
            <ul class="list-disc ml-5 text-gray-800 dark:text-gray-300">
                <h3 class="text-pink-400 font-bold">Direwolf Digital, Denver - QA Tester</h3>
                <li>Evaluated game builds to identify and troubleshoot bugs, collaborating with the development team to implement effective solutions</li>
                <li>Researched and evaluated new technologies and tools to enhance QA capabilities and improve testing efficiency</li>
            </ul>

            <ul class="list-disc ml-5 text-gray-800 dark:text-gray-300">
                <h3 class="text-pink-400 font-bold">Techtonic Group, Boulder - Jr .NET Developer</h3>
                <li>Collaborated closely with team members to identify and resolve software bugs</li>
                <li>Researched and evaluated new technologies and tools to enhance QA capabilities and improve testing efficiency</li>
                <li>Implemented front-end solutions using various JavaScript frameworks, HTML, and CSS</li>
            </ul>
        </section>

        <!-- Education -->
        <!-- <section class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Education</h2>
            <p class="text-gray-800 dark:text-gray-300"><strong>Degree</strong>, Major - University Name (Year)</p>
        </section> -->

        <!-- Back to Home Button -->
        <div class="text-center mt-6">
            <Button 
                on:click={handleBackClick} 
                class="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition duration-200 ease-in-out"
            >
                Back to Home
            </Button>
        </div>
    </div>
</div>
