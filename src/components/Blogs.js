import React, { useState, useEffect } from "react";
import "./Blogs.scss";
import Blog from "./Blog";
import Data from "./Data";

//Data is collected from the data function and stored in blog array. hashmap defined for blog array iteration to just get 1 blog per user id, this is an area to improve on.
//Each blog selected is then mapped to a Blog component, passing in the blog itself.

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
            <Blog blog={blog} key={blog.userId} />
          </>
        ))}
      </div>
    </div>
  );
}
