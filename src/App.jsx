import { Loader } from "lucide-react";
import React, { lazy, Suspense } from "react"
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const ProductListUser = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const UserLayouts = lazy(() => import('./layouts/UserLayouts'));

const Login = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const ProductList = lazy(() => import('./pages/admin/ProductList'));
const AdminProtectedRoute = lazy(() => import('./guard/AdminProtectedRoute'));
const AdminLoginGuard = lazy(() => import('./guard/AdminLoginGuard'));
const AdminLayouts = lazy(() => import('./layouts/AdminLayouts'));

const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <Suspense fallback={<div className="flex justify-center items-center h-40">
          <Loader className="animate-spin h-6 w-6 text-gray-600" />
        </div>}>
        <Routes>
          <Route element={<UserLayouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListUser />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route
            path="/admin/login"
            element={
              <AdminLoginGuard>
                <Login />
              </AdminLoginGuard>
            }
          />
          <Route element={<AdminProtectedRoute />}>
            <Route element={<AdminLayouts />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/products" element={<ProductList />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App