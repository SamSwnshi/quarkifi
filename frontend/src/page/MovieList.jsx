import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  setError,
  clearSearch,
  incrementPage
} from '../redux/movieSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';


const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    list,
    loading,
    error,
    search,
    currentQuery,
    currentPage,
    hasMore
  } = useSelector(state => state.movies);
  const displayList = currentQuery ? search : list;
  const isSearchActive = !!currentQuery;

  const getMovies = async () => {
    if (isSearchActive) return;
    dispatch(fetchMoviesStart())
    try {
      const response = await axios.get(`${API_BASE_URL}/movies`)
      console.log(response.data)
      dispatch(fetchMoviesSuccess(response.data.results || response.data));
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message;
      dispatch(setError(errorMessage));
    }
  }
  useEffect(() => {
    if (isSearchActive) {
      dispatch(clearSearch());
      return;
    }
    if (list.length === 0 && !loading) {
      getMovies();
    }
  }, [isSearchActive, list.length, loading, dispatch]);
  const handleLoadMore = () => {

    dispatch(incrementPage());
    // 2. Re-run the fetch, which triggers the 'Load More' logic in the Redux reducer
    getMovies();
  };
  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };
  if (loading && displayList.length === 0) return <p className="text-center mt-8">Loading movies...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error}</p>;
  if (displayList.length === 0 && !loading) return <p className="text-center mt-8">No movies found.</p>;
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6">
        {isSearchActive ? `Search Results for "${currentQuery}"` : 'Popular Movies'}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayList.map(movie => (
          <div
            key={movie.id}
            className="border p-4 rounded shadow cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => handleMovieClick(movie.id)}
          >
            {/* Placeholder for movie content */}
            <img
              src={movie.poster || 'https://via.placeholder.com/150x225?text=No+Poster'}
              alt={movie.title}
              className="w-full h-auto object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-center text-sm">{movie.title}</h3>
          </div>
        ))}
      </div>

      {/* Load More Button for the main list only */}
      {!isSearchActive && hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-green-500 text-white p-3 rounded hover:bg-green-600 disabled:opacity-50"
            disabled={loading}
          >
            Load More Movies
          </button>
        </div>
      )}
      {(loading && !isSearchActive) && <p className="text-center mt-4">Loading more...</p>}
    </div>
  )
}

export default MovieList
