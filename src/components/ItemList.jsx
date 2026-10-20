
import ItemCard from './ItemCard'

function ItemList({
  movies,
  onSelect,
  isFavorite,
  onToggleFavorite
}) {
  if (movies.length === 0) {
    return (
      <p className="py-10 text-center text-slate-400">
        Nenhum filme encontrado.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <ItemCard
          key={movie.id}
          movie={movie}
          onSelect={onSelect}
          isFavorite={isFavorite(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default ItemList
