// TagPage.js

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="px-4 py-8">
      <Header />
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigation(-1)}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
        >
          Back
        </button>
        <h2 className="text-2xl font-semibold">
          Blogs Tagged <span className="text-blue-600">#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
