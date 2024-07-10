// BlogPage.js

import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { setLoading, loading } = useContext(AppContext);
  const location = useLocation();
  const navigation = useNavigate();
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error fetching related blogs:", error);
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId]);

  return (
    <div className="px-4 py-8">
      <Header />
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigation(-1)}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 md:mt-14 sm: mt-16"
        >
          Back
        </button>
      </div>
      {loading ? (
        <div className="text-center">
          <p className="text-lg font-bold">Loading...</p>
        </div>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2 className="text-2xl font-semibold mt-8 mb-4">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-bold">No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
