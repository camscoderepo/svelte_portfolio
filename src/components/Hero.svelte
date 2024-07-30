<script>
    export let title = "Welcome to Our Website!";
    export let subtitle = "We offer a variety of services to help you succeed.";
    export let buttonText = "Learn More";
    export let buttonUrl = "#";
  </script>
  
  <style>
    /* Global Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    /* Hero Section */
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
      background: linear-gradient(135deg, #6b5b95, #feb236);
      color: white;
      min-height: 100vh; /* Full viewport height */
      width: 100%; /* Full width */
    }
  
    .hero-title {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
  
    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  
    .hero-button {
      background: #feb236;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
    }
  
    .hero-button:hover {
      background: #ffb447;
    }
  
    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }
  
      .hero-subtitle {
        font-size: 1rem;
      }
  
      .hero-button {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
      }
    }
  
    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.75rem;
      }
  
      .hero-subtitle {
        font-size: 0.875rem;
      }
  
      .hero-button {
        font-size: 0.75rem;
        padding: 0.5rem 0.75rem;
      }
    }
  </style>
  
  <div class="hero">
    <h1 class="hero-title">{title}</h1>
    <p class="hero-subtitle">{subtitle}</p>
    <a class="hero-button" href="{buttonUrl}">{buttonText}</a>
  </div>
  
  