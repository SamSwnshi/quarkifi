import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
    searchMoviesStart,
    searchMoviesSuccess,
    setError
} from '../redux/movieSlice';
import { addSearch } from '../redux/historySlice';
const API_BASE_URL = 'http://localhost:8080/api';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const searchHistory = useSelector(state => state.searchHistory.history);
    const loading = useSelector(state => state.movies.loading);

    const performSearch = async (searchTerm) => {
        const term = searchTerm.trim();
        if (!term) return;


        dispatch(searchMoviesStart(term));

        try {
            console.log('Searching for:', term);
            const response = await axios.post(`${API_BASE_URL}/search`, { query: term });
            console.log('Search response:', response.data);

            dispatch(searchMoviesSuccess(response.data));

            dispatch(addSearch(term));

        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message;
            dispatch(setError(errorMessage));
            console.error("Search failed:", errorMessage);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        performSearch(query);
    };

    const handleHistoryClick = (term) => {
        setQuery(term);
        performSearch(term);
    };
    return (
        <div className='my-6 flex  flex-col items-center justify-center '>
            <form onSubmit={handleSearch} className="flex gap-1 mb-4 justify-center p-4">
                <input type="text" placeholder='Search for a Movie....' className="w-96 p-3 border rounded-l-lg focus:ring-1 focus:ring-pink-500" value={query}
                    onChange={(e) => setQuery(e.target.value)} disabled={loading} />
                <button type='submit' className="bg-pink-500 text-white p-3 rounded-r-lg hover:bg-pink-600" disabled={loading || !query.trim()}>{loading ? 'Searching...' : 'Search'}</button>
            </form>
            <div className="flex flex-wrap gap-2 items-center">
                <span className="font-medium mr-2 text-gray-700">Recents:</span>
                {searchHistory.length > 0 ? (
                    searchHistory.map((term, index) => (
                        <button
                            key={index}
                            onClick={() => handleHistoryClick(term)}
                            className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-400 transition duration-150"
                            disabled={loading}
                        >
                            {term}
                        </button>
                    ))
                ) : (
                    <span className="text-sm text-gray-500 italic">No recent searches.</span>
                )}
            </div>
        </div>
    )
}

export default SearchPage
