import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Pages/Login';

const PublicRoutes = ({children}) => {
  return (
      <Routes>
          <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default PublicRoutes