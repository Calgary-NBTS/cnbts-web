'use server';
import { createClient } from '@/supabase/server';

import { headers } from 'next/headers';

export const addFeedback = async (formData: FormData) => {

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const header = headers();
  // const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
  // const ip = header.get('x-forwarded-for') ;

 header.forEach((value, key) => {
  console.log(key, value)
 })


  // const supabase = createClient();

  // const { error } = await supabase.from('feedback').insert(({email, name, ip, message}))

}