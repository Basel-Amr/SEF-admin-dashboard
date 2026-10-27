// ============================================================
// SHOPLYN — APPLICATION ROUTES
// File: src/routes/AppRoutes.jsx
// Purpose: Define and organize all application routes.
// ============================================================

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// ============================================================
// 1. SHARED LAYOUT
// ============================================================

// Shared layout for the admin dashboard, sidebar, and navbar.
// AdminLayout must render an <Outlet /> for nested pages.
import AdminLayout from "../components/layout/AdminLayout";

// ============================================================
// 2. PAGE IMPORTS
// ============================================================

// Dashboard — Main store administration overview
import Dashboard from "../pages/Dashboard";

// Authentication — Sign in, register, and recover accounts
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

// Public storefront — Customer-facing shopping pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Carts from "../pages/Carts";

// Customer account — Personal account and profile
import User from "../pages/User";

// Product management — Create and edit products
import AddProduct from "../pages/AddProduct";
import Edit from "../pages/Edit";

// Admin management — Customers, orders, and analytics
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";
import Analytics from "../pages/Analytics";

// Application settings — Store configuration
import Settings from "../pages/Settings";

// Utility pages — Loading and 404 fallback
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

// ============================================================
// 3. APPLICATION ROUTES
// ============================================================

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==================================================
            A. PUBLIC STOREFRONT
            Available to visitors and customers.
        ================================================== */}

        {/* Home — Main Shoplyn landing page */}
        <Route path="/" element={<Home />} />

        {/* Products — Browse the product catalog */}
        <Route path="/products" element={<Products />} />

        {/* Product details — View a specific product by ID */}
        <Route path="/products/:id" element={<Product />} />

        {/* Shopping cart — View selected shopping items */}
        <Route path="/cart" element={<Carts />} />

        {/* Backward compatibility for the old cart URL */}
        <Route
          path="/carts"
          element={<Navigate to="/cart" replace />}
        />

        {/* ==================================================
            B. AUTHENTICATION
            Account access and password recovery.
        ================================================== */}

        {/* Login — Existing users sign in */}
        <Route path="/login" element={<Login />} />

        {/* Register — New users create an account */}
        <Route path="/register" element={<Register />} />

        {/* Forgot password — Start account recovery */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Reset password — Set a new password */}
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        {/* ==================================================
            C. CUSTOMER ACCOUNT
            Personal account information.
        ================================================== */}

        {/* Account — View the user's profile */}
        <Route path="/account" element={<User />} />

        {/* ==================================================
            D. ADMIN DASHBOARD
            All admin pages share the same AdminLayout.
            Nested pages render inside AdminLayout's Outlet.
        ================================================== */}

        <Route path="/admin" element={<AdminLayout />}>
          {/* Dashboard — Default admin landing page */}
          <Route index element={<Dashboard />} />

          {/* Products — View and manage the product catalog */}
          <Route path="products" element={<Products />} />

          {/* Add product — Create a new product */}
          <Route
            path="products/new"
            element={<AddProduct />}
          />

          {/* Edit product — Update an existing product by ID */}
          <Route
            path="products/:id/edit"
            element={<Edit />}
          />

          {/* Customers — View and manage customer records */}
          <Route path="customers" element={<Customers />} />

          {/* Orders — View and manage store orders */}
          <Route path="orders" element={<Orders />} />

          {/* Analytics — Review store performance */}
          <Route path="analytics" element={<Analytics />} />

          {/* Carts — Admin cart page, if supported by this component */}
          <Route path="carts" element={<Carts />} />

          {/* Settings — Configure store preferences */}
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ==================================================
            E. LEGACY URL REDIRECTS
            Preserve compatibility with previous URLs.
        ================================================== */}

        {/* Redirect the old dashboard URL to the new admin route */}
        <Route
          path="/dashboard"
          element={<Navigate to="/admin" replace />}
        />

        {/* ==================================================
            F. UTILITY ROUTES
            Loading states and unknown URLs.
        ================================================== */}

        {/* Loading — Optional standalone loading screen */}
        <Route path="/loading" element={<Loading />} />

        {/* Not Found — Catch every unmatched URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;