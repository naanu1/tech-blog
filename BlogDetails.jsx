import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="my-4 bg-white rounded-md shadow-lg h-full shad">
      <NavLink to={`/blog/${post.id}`} className="block h-full">
        <div className="p-4 h-full flex flex-col justify-between">
          <p className="text-xl font-bold text-blue-600 hover:underline mb-4">
            {post.title}
          </p>
          <div className="flex items-center mb-2">
            <p className="text-sm text-gray-500">
              By <span className="font-semibold">{post.author}</span> on{" "}
              <NavLink
                to={`/categories/${post.category.replaceAll(" ", "-")}`}
                className="text-blue-500 hover:underline"
              >
                {post.category}
              </NavLink>
            </p>
          </div>
          <p className="text-sm text-gray-500">Posted on {post.date}</p>
          <p className="mt-2 text-sm">{post.content}</p>
          <div className="mt-2 flex flex-wrap">
            {post.tags.map((tag, index) => (
              <NavLink
                key={index}
                to={`/tags/${tag.replaceAll(" ", "-")}`}
                className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-md text-gray-700 text-xs hover:bg-gray-300 hover:text-gray-800"
              >
                #{tag}
              </NavLink>
            ))}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BlogDetails;
