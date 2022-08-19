import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogsData } from "../data";

const Blogs = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else return;
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title} state={{ body }}>
                Learn More
              </Link>
              
            </article>
          );
        })}
      </section>
      <button className="home_btn" onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Blogs;
