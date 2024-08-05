import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import BlogPosts from "./components/BlogPosts";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.token);
  return (
    <Router>
      <div>
   
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <BlogPosts />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:postId"
            element={
              <PrivateRoute>
                <EditPost />
              </PrivateRoute>
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <PrivateRoute>
                <ViewPost />
              </PrivateRoute>
            }
          />
        </Routes>
        <nav>{isAuthenticated && <Logout />}</nav>
      </div>
    </Router>
  );
};

export default App;