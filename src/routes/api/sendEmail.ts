// src/routes/api/sendEmail.ts

import { json, type RequestHandler } from '@sveltejs/kit';
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_AWS_REGION,
});

// Create a new SES instance
const ses = new AWS.SES();

// Function to send an email
const sendEmail = async (to: string, subject: string, body: string) => {
  const params = {
    Source: 'your-email@example.com',
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
  };

  try {
    await ses.sendEmail(params).promise();
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const POST: RequestHandler = async ({ request }) => {
  const { to, subject, body } = await request.json();

  try {
    await sendEmail(to, subject, body);
    return json({ message: 'Email sent successfully' });
  } catch (error) {
    return json({ error: 'Failed to send email' }, { status: 500 });
  }
};
