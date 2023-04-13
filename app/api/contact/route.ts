import { Contacts, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {


    const { name, email, phone } = await request.json() as Contacts
    const contact = await prisma.contacts.create({
      data: {
        name: name as string,
        email: email as string,
        phone: phone as string,
      }

    })
    return new Response('sent', { status: 201 })
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message || 'Something went wrong' }))
  }
}