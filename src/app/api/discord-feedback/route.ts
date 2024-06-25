export const dynamic = 'force-dynamic'; // defaults to auto

// export async function GET(request: Request) {
//   return new Response('Hello World!', {
//     status: 200,
//     headers: {
//       'content-type': 'text/plain',
//     },
//   })
// }

export async function POST(request: Request) {
  const data = await request.json();

  const discordCall = await fetch(
    process.env.DISCORD_EVENT_WEBHOOK_URL as string,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `**${data.record.name}** (${data.record.email}) says:\n ${data.record.message}`,
      }),
    },
  );

  return new Response('Success', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  });
}

/*
{
  type: 'INSERT',
  table: 'feedback',
  record: {
    id: 'f8fa0132-65f0-4fdc-872d-5903f2071f2a',
    ip: '174.0.248.50',
    name: 'Jenn',
    email: 'jenniferashleyfix@gmail.com',
    message: 'Why',
    created_at: '2024-06-10T04:33:07.480638+00:00'
  },
  schema: 'public',
  old_record: null
}
*/
