'use server';
import { addSubscriber } from '@/lib/convertkit/convertkit.client';

export async function subscribe(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  try {
    if (!name || typeof name !== 'string' || !email || typeof email !== 'string') {
      throw new Error('Name and Email required');
    }
    await addSubscriber(email, name);
    return {
      message: 'success',
    };
  } catch (error) {
    console.error(error);
    return { message: 'Something went wrong, please try again' };
  }
}
