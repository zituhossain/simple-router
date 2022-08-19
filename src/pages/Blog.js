import React from "react";
import { useParams, useLocation } from "react-router-dom";
// import { blogsData } from "../data";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

    // const [bodyData, setBodyData] = useState("");

  //   useEffect(() => {
  //     const blogData = blogsData.filter((blog) => blog.title === title);
  //     setBodyData(blogData[0].body);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div>
      <h1>{title} page</h1>
      <p>{location.state.body.slice(0, 400)}</p>
      <p>{location.state.body.slice(401, 4000)}</p>
    </div>
  );
};

export default Blog;
