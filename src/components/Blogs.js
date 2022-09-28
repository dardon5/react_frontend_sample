import React, { useState, useEffect } from "react";
import "./Blogs.scss";
import Blog from "./Blog";
import Data from "./Data";

export default function Blogs() {
  const blog = Data();

  const seen = new Map();
  let blogsToBeRendered = [];
  for (let i = 0; i < blog.length; i++) {
    if (!seen.get(blog[i].userId)) {
      blogsToBeRendered.push(blog[i]);
      seen.set(blog[i].userId, true);
    }
  }

  return (
    <div>
      <h1 className="header">Check out these blogs by our authors!</h1>
      <div className="blogs">
        {blogsToBeRendered.map((blog) => (
          <>
            <Blog blog={blog} key={blog.id} />
          </>
        ))}
      </div>
    </div>
  );
}
