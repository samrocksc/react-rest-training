'use client'
import { useEffect, useState } from 'react'
type User = { id: number; name: string; role: string }

export default function Home() {
  const [q, setQ] = useState('')
  const [items, setItems] = useState<User[]>([])
  const [page, setPage] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      fetch(`/api/users?q=${q}&limit=4&offset=${page * 4}`)
        .then((r) => r.json()).then((d) => setItems(d.items))
    }, 300)
    return () => clearTimeout(t)
  }, [q, page])
  return (
    <div>
      <input value={q} onChange={(e) => { setQ(e.target.value); setPage(0) }} placeholder="search" />
      <ul>{items.map((u) => <li key={u.id}>{u.id} {u.name} {u.role}</li>)}</ul>
      <button onClick={() => setPage((p) => Math.max(0, p - 1))}>prev</button>
      <button onClick={() => setPage((p) => p + 1)}>next</button>
    </div>
  )
}
