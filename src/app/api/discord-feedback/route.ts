import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request, response: Response) {
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
  console.log('body', await request.json())

  return new Response('Success', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  })
}