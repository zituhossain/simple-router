import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

//Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Error from "./pages/Error";

import "./App.css";
import Protected from "./components/Protected";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button className="logout_btn"
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button className="login_btn"
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Blogs />
            </Protected>
          }
        />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
