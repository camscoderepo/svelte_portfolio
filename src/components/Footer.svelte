<!-- Footer.svelte -->
<script>
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  
    export let email = 'cameron.roman@icloud.com';
    export let name = 'Cameron Roman';
  </script>
  
  <style>
    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: #333;
      color: white;
    }
    .footer-content {
      display: flex;
      align-items: center;
    }
    .footer-content a {
      color: white;
      margin: 0 0.5rem;
      text-decoration: none;
    }
  </style>
  
  <footer>
    <div class="footer-content">
      <span>{name}</span>
      <a href="mailto:{email}">{email}</a>
      <a href="https://github.com/camscoderepo" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </footer>