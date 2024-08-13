<!-- Footer.svelte -->
<script>
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import heart icon
  
    export let email = 'cameron.roman@icloud.com';
    export let name = 'Cameron Roman';
</script>

<footer class="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div class="flex items-center">
        <span class="mr-2">{name}<span class="ml-1">&trade;</span></span>
    </div>
    <div class="flex-grow flex items-center justify-center">
        <div class="flex items-center">
            <span class="mx-2">Made with</span>
            <FontAwesomeIcon icon={faHeart} />
        </div>
    </div>
    <div class="flex items-center">
        <a href="mailto:{email}" class="text-white mx-2">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/camscoderepo" target="_blank" rel="noopener noreferrer" class="text-white mx-2">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/cameron-roman-653865183/" target="_blank" rel="noopener noreferrer" class="text-white mx-2">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </div>
</footer>
