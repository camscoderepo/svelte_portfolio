import { put } from '@vercel/blob';

export async function PUT(request: Request) {
  const { url } = await put('/lib/assets/new_coding.mp4', request.body, { access: 'public' });
 
  return Response.json({
    url
  });
}