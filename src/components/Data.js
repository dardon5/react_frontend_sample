import React, { useState, useEffect } from "react";

export default function Data() {
  const [blog, getBlog] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getBlog(res);
      });
  }, []);
  return blog;
}
