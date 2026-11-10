import { NextResponse } from 'next/server'
import users from '@/data/users.json'
type U = { id: number; name: string; role: string }

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q')?.toLowerCase() ?? ''
  const limit = Number(url.searchParams.get('limit') ?? 10)
  const offset = Number(url.searchParams.get('offset') ?? 0)
  let out = users as U[]
  if (q) out = out.filter((u) => u.name.toLowerCase().includes(q) || u.role.toLowerCase().includes(q))
  const total = out.length
  out = out.slice(offset, offset + limit)
  return NextResponse.json({ total, items: out })
}
