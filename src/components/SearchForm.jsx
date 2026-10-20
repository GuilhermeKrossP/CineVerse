
function SearchForm({ search, setSearch, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault()
    onSearch()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar filmes..."
        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-purple-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchForm
