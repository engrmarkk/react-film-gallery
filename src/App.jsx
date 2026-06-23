import { useState, useEffect } from 'react'
import Search from './components/Search'
import Navbar from "./components/Navbar.jsx";
import MovieCard from './components/MovieCard'
import { useDebounce } from 'react-use'

const PROCESS_ENV = import.meta.env
const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${PROCESS_ENV.VITE_TMDB_API_KEY}`
    }
}


const App = () => {
    const [movieList, setMovieList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

    useDebounce(() => {
        setDebouncedSearchTerm(searchTerm)
    }, 500, [searchTerm])


    const fetchMovies = async (query = '') => {
        try {
            console.log('Fetching movies with query:', query)
            const endpoint = query
                ? `${PROCESS_ENV.VITE_API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${PROCESS_ENV.VITE_API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint, API_OPTIONS)
            const data = await response.json()
            if(data.Response === 'False') {
                throw new Error(data.Error)
            }
            setMovieList(data.results || [])
        } catch (error) {
            console.error(`error fetching movies: ${error}`)
            setMovieList([])
        }

    }

    useEffect(() => {
        fetchMovies(debouncedSearchTerm)
    }, [debouncedSearchTerm])
    return (
        <>
            <Navbar />
        <div className='px-14'>
        <div className='mx-auto max-w-2xl py-32 justify-center align-center sm:py-48 lg:py-6'>
            <header>
            <img src="./hero1.png" alt="Hero Banner" className='mx-auto' />
                <p className='text-2xl font-bold text-center pt-12'>Search for your favorite movies without hassle</p>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </header>
        </div>
            <h2 className='text-5xl font-bold text-center'>Explore Movies</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                {movieList.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
            </>
    )
}
export default App
