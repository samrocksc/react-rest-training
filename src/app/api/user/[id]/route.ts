import { NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const user = (users as { id: number }[]).find((u) => u.id === id)
  if (!user) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json(user)
}
