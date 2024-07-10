// Pagination.js

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-gray-300">
      <div className="flex items-center justify-center space-x-4">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
