import { useState, useEffect } from "react";

//Setting the state using useState, initially its an empty array but then becomes array of posts called blogs, data is then fecthed from API then a promise is returned which gives us an object, then the state is updated.
//useEffect in place similarly to componentDidMount, componentDidUpdate, and componentWillUnmount in a class-based component.

export default function Data() {
  const [blogs, setBlog] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/posts";
  const fetchBlog = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setBlog(res);
        //console.log(res)
      });
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return blogs;
}
