export const dynamic = 'force-dynamic' // defaults to auto
import { NextResponse } from 'next/server';
import {PostHog} from 'posthog-node';
import { createId } from '@paralleldrive/cuid2';

const posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!)

// posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//   api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//   person_profiles: 'always',
// });

export type Params = {
    id: string;
};

export async function GET(request: Request, context: { params: Params}) {
  const { id } = context.params;

  posthog.capture({event: 'QR Code Scanned', distinctId: createId(), properties: {id}})
  return NextResponse.redirect(new URL('/', request.url))
}
