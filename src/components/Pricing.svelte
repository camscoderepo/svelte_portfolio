<script>
    export let plans = [
      {
        name: "Basic Plan",
        price: "$999",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        name: "Standard Plan",
        price: "$2499",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
      },
      {
        name: "Premium Plan",
        price: "$4999",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6", "Feature 7"],
      },
    ];
  </script>
  
  <section class="pricing-table">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div class="flex flex-wrap justify-center">
        {#each plans as plan}
          <div class="w-full md:w-1/3 p-4">
            <div class="pricing-card bg-white shadow-lg rounded-lg p-6">
              <h3 class="text-xl font-semibold text-center mb-4">{plan.name}</h3>
              <p class="text-center text-gray-600 mb-4">{plan.price}</p>
              <ul class="mb-6">
                {#each plan.features as feature}
                  <li class="mb-2"><i class="fas fa-check text-green-500"></i> {feature}</li>
                {/each}
              </ul>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg">Choose Plan</button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  