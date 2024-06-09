'use server';
import { createClient } from '@/supabase/server';

import { headers } from 'next/headers';

const validateHuman = async (token: string): Promise<boolean> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
    method: 'POST',
  });
  const data = await response.json();

  return data.success;
}

export const addFeedback = async (formData: FormData) => {

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const token = formData.get('token');

  const human = await validateHuman(token as string);
  if (!human) {
    return { error: 'Probably a robot' };
  }

  const header = headers();
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

  const supabase = createClient();

  return await supabase.from('feedback').insert(({email, name, ip, message}))

}

