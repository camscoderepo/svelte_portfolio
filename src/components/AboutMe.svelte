<!-- AboutMe.svelte -->
<script>
  import aboutImage from '../assets/me_as_bitmoji.png';
</script>

<section id="about" class="about-me container mx-auto px-4 py-8 relative">
  <div class="flex flex-col items-center text-center">
    <div class="relative w-full mb-24">
      <!-- Image positioned on top of the text -->
      <img src={aboutImage} alt="weirdo" class="rounded-full shadow-md w-32 h-32 mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 mb-4" /> <!-- Added mb-4 -->
    </div>
    <div class="w-full">
      <h2 class="text-3xl font-bold mb-4">About Me</h2>
      <p class="text-lg">
        Hello! I'm Cameron Roman, a freelance developer with a passion for creating beautiful and functional websites. My journey in web development has led me to work with various technologies, and I love bringing ideas to life through code.
      </p>
    </div>
  </div>
</section>
