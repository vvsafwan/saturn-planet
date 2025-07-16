import React, { lazy, Suspense } from "react"
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const UserLayouts = lazy(() => import('./layouts/UserLayouts'));

function App() {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route element={<UserLayouts />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
