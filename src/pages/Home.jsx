
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import useFavorites from '../hooks/useFavorites'
import {
  getPopularMoviesUrl,
  getSearchMoviesUrl,
  getGenresUrl,
  getMoviesByGenreUrl
} from '../services/api'
import SearchForm from '../components/SearchForm'
import ItemList from '../components/ItemList'
import ItemDetails from '../components/ItemDetails'

function Home() {
  const [search, setSearch] = useState('')
  const [searchUrl, setSearchUrl] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showFavorites, setShowFavorites] = useState(false)
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('')

  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    fetch(getGenresUrl())
      .then((response) => response.json())
      .then((data) => setGenres(data.genres || []))
      .catch((error) => console.error('Erro ao carregar gêneros:', error))
  }, [])

  let url = getPopularMoviesUrl()

  if (selectedGenre) {
    url = getMoviesByGenreUrl(selectedGenre)
  }

  if (searchUrl) {
    url = searchUrl
  }

  const {
    data: movies,
    loading,
    error
  } = useFetch(url)

  function handleSearch() {
    const searchText = search.trim()

    setSelectedMovie(null)
    setShowFavorites(false)
    setSelectedGenre('')

    if (searchText) {
      setSearchUrl(getSearchMoviesUrl(searchText))
    } else {
      setSearchUrl('')
    }
  }

  function handleGenreChange(event) {
    setSelectedGenre(event.target.value)
    setSearch('')
    setSearchUrl('')
    setShowFavorites(false)
    setSelectedMovie(null)
  }

  function exploreMovies() {
    document.getElementById('catalogo')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const displayedMovies = showFavorites ? favorites : movies

  return (
    <main className="min-h-screen bg-[#080811] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080811]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a
            href="#inicio"
            className="text-2xl font-black tracking-tight sm:text-3xl"
          >
            Cine<span className="text-purple-500">Verse</span>
            <span className="ml-2 hidden text-xs font-medium uppercase tracking-[0.25em] text-slate-500 sm:inline">
              Movie discovery
            </span>
          </a>

          <button
            onClick={() => {
              setShowFavorites(true)
              setSelectedMovie(null)
              exploreMovies()
            }}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-purple-500 hover:text-white"
          >
            ♡ Favoritos ({favorites.length})
          </button>
        </div>
      </header>

      <section
        id="inicio"
        className="relative isolate flex min-h-[440px] items-center overflow-hidden border-b border-white/10 sm:min-h-[500px]"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg')"
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080811] via-[#080811]/85 to-[#080811]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080811] via-transparent to-black/20" />

        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:py-24">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-purple-300 sm:text-sm">
            Seu próximo filme começa aqui
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Histórias que
            <br />
            merecem ser
            <br />
            <span className="text-purple-400">vividas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Descubra grandes filmes, encontre sua próxima paixão
            e monte sua própria lista de favoritos.
          </p>

          <button
            onClick={exploreMovies}
            className="mt-8 rounded-lg bg-purple-600 px-7 py-3.5 font-bold transition hover:bg-purple-500"
          >
            Explorar filmes <span className="ml-2">↓</span>
          </button>
        </div>
      </section>

      <section
        id="catalogo"
        className="mx-auto max-w-7xl px-4 py-10 sm:py-14"
      >
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
            Explore o universo do cinema
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Encontre seu próximo filme.
          </h2>

          <p className="mt-2 text-slate-400">
            Pesquise títulos ou descubra filmes por gênero.
          </p>
        </div>

        <div className="mb-8">
          <SearchForm
            search={search}
            setSearch={setSearch}
            onSearch={handleSearch}
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="genre"
            className="mb-2 block text-sm font-semibold text-slate-300"
          >
            Filtrar por gênero
          </label>

          <select
            id="genre"
            value={selectedGenre}
            onChange={handleGenreChange}
            className="w-full max-w-sm rounded-lg border border-white/10 bg-[#151522] px-4 py-3 text-white outline-none focus:border-purple-500"
          >
            <option value="">Todos os gêneros</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              setShowFavorites(false)
              setSelectedMovie(null)
              setSearch('')
              setSearchUrl('')
              setSelectedGenre('')
            }}
            className={`rounded-lg px-5 py-3 font-semibold transition ${
              !showFavorites
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            Filmes populares
          </button>

          <button
            onClick={() => {
              setShowFavorites(true)
              setSelectedMovie(null)
            }}
            className={`rounded-lg px-5 py-3 font-semibold transition ${
              showFavorites
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            ♡ Meus favoritos ({favorites.length})
          </button>
        </div>

        <ItemDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />

        <h3 className="mb-6 text-xl font-bold sm:text-2xl">
          {showFavorites
            ? 'Sua coleção pessoal'
            : searchUrl
              ? `Resultados para "${search}"`
              : selectedGenre
                ? `Filmes de ${genres.find(
                    (genre) => String(genre.id) === String(selectedGenre)
                  )?.name || 'gênero selecionado'}`
                : 'Em destaque'}
        </h3>

        {!showFavorites && loading && (
          <p className="py-10 text-center text-purple-400">
            Preparando a sessão...
          </p>
        )}

        {!showFavorites && error && (
          <p className="py-10 text-center text-red-400">
            {error}
          </p>
        )}

        {(showFavorites || (!loading && !error)) && (
          <ItemList
            movies={displayedMovies}
            onSelect={setSelectedMovie}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center">
        <p className="text-lg font-black">
          Cine<span className="text-purple-500">Verse</span>
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Descubra. Assista. Apaixone-se por histórias.
        </p>
        <p className="mt-4 text-xs text-slate-600">
          Projeto acadêmico desenvolvido com React, Tailwind CSS e TMDB API.
        </p>
      </footer>
    </main>
  )
}

export default Home
