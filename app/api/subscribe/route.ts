// app/api/subscribe.ts

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body
    const response = await fetch('https://app.gumroad.com/follow_from_embed_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      },
      body: new URLSearchParams({
        seller_id: '4612423157976',
        email: email,
      }),
    })
    if (!response.ok) {
      const errorData = await response.json()
      console.error('Error from Gumroad:', errorData)
      return new Response(JSON.stringify({ error: 'Gumroad Error' }), { status: response.status })
    }

    const data = await response.json()
    return Response.json(data, { status: response.status })
  } catch (error) {
    console.error('Error:', error.message)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
