import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import * as P from './pages'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<P.Dashboard />} />
      <Route path="/products" element={<P.Products />} />
      <Route path="/signup" element={<P.SignUp />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
