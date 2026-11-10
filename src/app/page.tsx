'use client'
import { useEffect, useState } from 'react'
import { binarySearchById } from '@/lib/binarySearch'
type User = { id: number; name: string; role: string }

export default function Home() {
  const [all, setAll] = useState<User[]>([])
  const [target, setTarget] = useState('')
  const [found, setFound] = useState<User | undefined>()
  useEffect(() => { fetch('/api/users?limit=100&offset=0').then(r=>r.json()).then(d=>setAll(d.items)) }, [])
  useEffect(() => {
    const id = Number(target)
    if (!Number.isFinite(id) || !target) { setFound(undefined); return }
    setFound(binarySearchById(all, id))
  }, [target, all])
  return (
    <div>
      <input value={target} onChange={(e)=>setTarget(e.target.value)} placeholder="user id" />
      <p>{found ? `${found.name} — ${found.role}` : 'no match'}</p>
    </div>
  )
}
