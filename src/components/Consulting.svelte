<script>
  import Button from '../components/Button.svelte'  
   export let embedUrl = "https://calendly.com/cameron-roman/30min?embed_domain=yourdomain.com&embed_type=inline";
    let isLoaded = false;

    function loadCalendly() {
        isLoaded = true;
    }
</script>

<section id="schedule" class="bg-gray-300 dark:bg-gray-700 py-12">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold  mb-4 text-center">Schedule a Consultation</h2>
      
      <!-- Section Description -->
      <p class="text-lg mb-8 text-center">
        Ready to take your project to the next level? Book a 30-minute consultation with me to discuss your goals, ask questions, and receive personalized advice.
      </p>
      
      <!-- Calendly Widget -->
      <div class="flex justify-center items-center">
        <Button onClick={loadCalendly}>Schedule a 30-Minute Call</Button>
      </div>  
      {#if isLoaded}
          <iframe src={embedUrl} 
                  title="Schedule a 30 minute call with Cameron!"
                  width="100%" 
                  height="800" 
                  frameborder="0" 
                  class="rounded-lg shadow-lg custom-margin">
          </iframe>
      {/if}
      </div>      
      <!-- Testimonials -->
      <!-- <div class="text-center">
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">What Clients Are Saying</h3>
        <div class="max-w-2xl mx-auto">
          <blockquote class="bg-white p-6 rounded-lg shadow-md mb-4">
            <p class="text-lg text-gray-800">“Working with [Your Name] was a game-changer for my business. Highly recommend the consultation!”</p>
            <footer class="mt-4 text-gray-600">– [Client Name]</footer>
          </blockquote>
          <blockquote class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-lg text-gray-800">“The advice I received was incredibly valuable and helped me refine my project strategy.”</p>
            <footer class="mt-4 text-gray-600">– [Client Name]</footer>
          </blockquote>
        </div>
      </div>
    </div> -->
  </section>
  <style>
    @media (max-width: 1024px) and (min-width: 769px) {
      iframe{
        height: 800px;
      }
  }
    @media (max-width: 768px) {
      iframe {
        height: 780px; /* Increase this value as needed to fit the content */
      }
  }
  </style>