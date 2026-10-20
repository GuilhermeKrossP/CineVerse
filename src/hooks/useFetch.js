
import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Não foi possível carregar os filmes.')
        }

        const result = await response.json()
        setData(result.results || [])
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
