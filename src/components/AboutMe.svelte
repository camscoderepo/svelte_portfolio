<!-- AboutMe.svelte -->
<script>
  import aboutImage from '$lib/assets/bitmoji.png';
</script>

<section id="about" class="about-me container mx-auto px-4 py-8 relative">
  <div class="flex flex-col items-center text-center">
    <div class="relative w-full mb-24">
      <!-- Image positioned on top of the text -->
      <img src={aboutImage} alt="" class="rounded-full shadow-md w-32 h-32 mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 mb-4" /> <!-- Added mb-4 -->
    </div>
    <div class="w-full">
      <h2 class="text-3xl font-bold mb-4">About Me</h2>
      <p class="text-lg">
        Hello! I’m Cameron Roman, a freelance web developer with a passion for crafting beautiful and functional websites. My journey through web development has equipped me with experience across a variety of technologies and roles in the industry.
        Do you have a great idea that you’re eager to bring to life? I’m here to help turn your vision into reality! Click the "Contact Me" button to fill out your details or book a consultation below. Let’s make something amazing together!
      </p>
    </div>
  </div>
</section>
