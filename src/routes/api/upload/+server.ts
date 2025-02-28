import { put } from '@vercel/blob';

export async function PUT({ request }) {
  const { url } = await put('/lib/assets/new_coding.mp4', request.body, { access: 'public' });

  return new Response(JSON.stringify({ url }), { 
    headers: { 'Content-Type': 'application/json' }
  });
}
