import { json, type RequestHandler } from '@sveltejs/kit';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize the SES client
const client = new SESClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey:import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  },
});

// Function to send an email
const sendEmail = async (to: string, subject: string, body: string) => {
  const command = new SendEmailCommand({
    Source: 'cameron.roman@icloud.com', // Ensure this email is verified
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: body,
        },
      },
    },
  });

  try {
    await client.send(command);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const POST: RequestHandler = async ({ request }) => {
  const { to, subject, body, token } = await request.json();

  // Verify reCAPTCHA token
  const recaptchaSecret = import.meta.env.VITE_RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`;

  const recaptchaResponse = await fetch(verificationUrl, {
    method: 'POST',
  });
  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success || recaptchaData.score < 0.65) {
    // Adjust the score threshold based on your needs
    return json({ error: 'reCAPTCHA verification failed or score too low' }, { status: 400 });
  }

  try {
    await sendEmail(to, subject, body);
    return json({ message: 'Email sent successfully' });
  } catch (error) {
    return json({ error: 'Failed to send email' }, { status: 500 });
  }
};