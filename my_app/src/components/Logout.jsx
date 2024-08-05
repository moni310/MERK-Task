import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin", { replace: true });
    localStorage.clear();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;