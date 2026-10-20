
function ItemDetails({ movie, onClose }) {
  if (!movie) {
    return null
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750?text=Sem+poster'

  return (
    <div className="mb-8 rounded-xl border border-purple-500/40 bg-slate-900 p-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full rounded-lg object-cover sm:w-56"
        />

        <div className="flex-1">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {movie.title}
          </h2>

          <p className="mb-3 text-slate-300">
            <strong>Data de lançamento:</strong>{' '}
            {movie.release_date || 'Não informada'}
          </p>

          <p className="mb-3 text-yellow-400">
            <strong>Nota:</strong> {movie.vote_average?.toFixed(1) || 'Sem nota'} / 10
          </p>

          <p className="mb-5 leading-relaxed text-slate-300">
            {movie.overview || 'Não há sinopse disponível para este filme.'}
          </p>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-600"
          >
            Fechar detalhes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
