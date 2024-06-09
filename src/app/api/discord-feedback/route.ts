export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
  console.log(request)
  return new Response('Hello World!', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  })
}

export async function POST(request: Request) {

  console.log('request', request)

  return new Response('Hello World!', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  })
}