// src/types/recaptcha.d.ts

interface ReCaptcha {
    enterprise: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
  
  declare const hcaptcha: ReCaptcha;
  