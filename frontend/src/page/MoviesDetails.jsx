
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


import { 
    fetchDetailsStart, 
    fetchDetailsSuccess, 
    setError, 
    clearDetails 
} from '../redux/movieSlice';

const API_BASE_URL = 'http://localhost:8080/api';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { details, loading, error } = useSelector(state => state.movies);


  const getMovieDetails = async (movieId) => {
      dispatch(fetchDetailsStart());
      try {
          const response = await axios.get(`${API_BASE_URL}/movies/${movieId}`);
          console.log("Response from getMoviesDetails:",response.data)
          dispatch(fetchDetailsSuccess(response.data));
      } catch (err) {
          const errorMessage = err.response?.data?.error || err.message;
          dispatch(setError(errorMessage));
      }
  };

  useEffect(() => {
    getMovieDetails(id);

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, id]); 

  if (loading || !details) return <p className="text-center mt-8">Loading movie details...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error}</p>;


  const genreList = details.genres && Array.isArray(details.genres) 
      ? details.genres.join(', ') 
      : 'N/A';

  const directorName = details.directors && details.directors.length > 0
      ? details.directors[0].displayName 
      : 'N/A';   
  return (
    <div className="mt-8 p-6 border rounded shadow-lg">
      <button 
          onClick={() => navigate(-1)} 
          className="mb-4 text-blue-500 hover:text-blue-700 font-semibold"
      >
        &larr; Back to List
      </button>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={details.primaryImage.url} 
            alt={details.primaryTitle} 
            className="w-full h-auto object-cover rounded shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{details.primaryTitle}</h1>
          <p className="text-lg mb-4">Year: {details.startYear || 'N/A'}</p>
          <p className="text-gray-700 mb-4">{details.plot || 'No plot available.'}</p>
          
          <div className="space-y-2">
            <p><strong>Rating:</strong> {details.rating.aggregateRating || 'N/A'}</p>
            <p><strong>Genre:</strong> {genreList}</p>
            <p><strong>Director:</strong> {directorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;