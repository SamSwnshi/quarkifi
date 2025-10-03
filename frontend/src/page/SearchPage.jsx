import React from 'react'

const SearchPage = () => {
    return (
        <div className='my-6 flex items-center justify-center border-2'>
            <form className="flex gap-1 mb-4 justify-center p-4">
                <input type="text" placeholder='Search for a Movie....' className="w-96 p-3 border rounded-l-lg focus:ring-1 focus:ring-pink-500" />
                <button type='submit' className="bg-pink-500 text-white p-3 rounded-r-lg hover:bg-pink-600">Search</button>
            </form>

        </div>
    )
}

export default SearchPage
