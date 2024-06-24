export const dynamic = 'force-dynamic' // defaults to auto
import { NextResponse } from 'next/server';
import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  person_profiles: 'always',

});

export type Params = {
    id: string;
};

export async function GET(request: Request, context: { params: Params}) {
  const { id } = context.params;

  posthog.capture('QR Code Scanned', { id })
  return NextResponse.redirect(new URL('/', request.url))
}
