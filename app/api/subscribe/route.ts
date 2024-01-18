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
    console.log(response)
    return Response.json('ok', { status: response.status })
  } catch (error) {
    console.error('Error:', error.message)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
