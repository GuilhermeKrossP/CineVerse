
function ItemCard({ movie, onSelect, isFavorite, onToggleFavorite }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750?text=Sem+poster'

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-purple-500">
      <button
        onClick={() => onToggleFavorite(movie)}
        className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-2 text-xl"
        title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <div
        onClick={() => onSelect(movie)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') onSelect(movie)
        }}
        role="button"
        tabIndex={0}
        className="cursor-pointer"
      >
        <img
          src={imageUrl}
          alt={movie.title}
          className="h-80 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold text-white">
            {movie.title}
          </h3>

          <p className="text-sm text-slate-400">
            Lançamento: {movie.release_date || 'Não informado'}
          </p>

          <p className="mt-2 text-sm text-yellow-400">
            Nota: {movie.vote_average?.toFixed(1) || 'Sem nota'} / 10
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
