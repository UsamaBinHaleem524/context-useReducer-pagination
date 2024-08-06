import React, { useContext } from 'react';
import { context } from '../context/context';

const Pagination = () => {
  const { page, nbPages, handleNextPage, handlePrevPage } = useContext(context);
  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      <button
        onClick={() => handlePrevPage()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Prev
      </button>
      <p className="text-gray-700">
        {page + 1} of {nbPages}
      </p>
      <button
        onClick={() => handleNextPage()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
