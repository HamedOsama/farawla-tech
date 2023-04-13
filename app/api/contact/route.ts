import { Contact, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {


    const { name, phone, message } = await request.json() as Contact
    const contact = await prisma.contact.create({
      data: {
        name: name as string,
        phone: phone as string,
        message: message as string,
      }

    })
    return new Response('sent', { status: 201 })
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message || 'Something went wrong' }))
  }
}