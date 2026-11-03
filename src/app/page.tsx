'use client'
import { useEffect, useState } from 'react'

type User = { id: number; name: string; role: string }

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    fetch('/api/user/1').then((r) => r.json()).then(setUser)
  }, [])
  if (!user) return <p>Loading...</p>
  return <p>{user.name} — {user.role}</p>
}
