import React, { useContext } from 'react'
import { context } from '../context/context'

const Search = () => {
  const { query, searchPost } = useContext(context);
  return (
    <div className="flex justify-center mt-4">
      <form className="w-full max-w-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  )
}

export default Search;
