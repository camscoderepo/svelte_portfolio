<!-- AboutMe.svelte -->
<script>
    import aboutImage from '../assets/AboutImage.jpg';
  </script>
  
  <section id="about" class="about-me container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 md:pr-8">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <p class="text-lg">
          Hello! I'm Cameron Roman, a freelance developer with a passion for creating beautiful and functional websites. My journey in web development has led me to work with various technologies, and I love bringing ideas to life through code.
        </p>
      </div>
      <div class="md:w-1/2 mb-6 md:mb-0">
        <img src={aboutImage} alt="weirdo" class="rounded-lg shadow-md w-full h-1/2" />
      </div>
    </div>
  </section>
  