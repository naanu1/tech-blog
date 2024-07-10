// Home.js

import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div className="px-4 py-8">
      <Header />
      <div className="mt-8">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
