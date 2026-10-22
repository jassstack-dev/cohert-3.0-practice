
import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch API
  const users = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/users')

      if (!res.ok) {
        throw new Error('Failed to fetch users')
      }

      const data = await res.json()
      setUser(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    users()
  }, [])

  // Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 700)

    return () => clearTimeout(timer)
  }, [search])

  // Filter users after debounce
  const filterUser = user.filter((val) => {
    return val.username
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  })

  return (
    <div>
      <h1>Search Users</h1>

      <input
        type="text"
        placeholder="Search username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          {filterUser.length > 0 ? (
            filterUser.map((val) => (
              <p key={val.id}>{val.username}</p>
            ))
          ) : (
            <p>User not found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default App
