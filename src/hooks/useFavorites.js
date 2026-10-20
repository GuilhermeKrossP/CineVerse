
import { useState, useEffect } from 'react'

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('cineverse-favorites')

    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'cineverse-favorites',
      JSON.stringify(favorites)
    )
  }, [favorites])

  function toggleFavorite(movie) {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === movie.id
    )

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter((favorite) => favorite.id !== movie.id)
      )
    } else {
      setFavorites([...favorites, movie])
    }
  }

  function isFavorite(movieId) {
    return favorites.some((movie) => movie.id === movieId)
  }

  return { favorites, toggleFavorite, isFavorite }
}

export default useFavorites
