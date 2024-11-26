// src/App.js
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Login from './pages/Login';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <div className="flex-grow container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js
// import React from 'react';
// import React, { useState } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Login from './pages/Login';
// import Register from './pages/Register'; // Import the Register component
// import CustomerDashboard from './pages/CustomerDashboard';
// import RetailerDashboard from './pages/RetailerDashboard';
// import { Navigate } from 'react-router-dom';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
        
//         <div className="flex-grow container mx-auto p-4 mt-16">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} /> {/* Add register route */}
//             <Route
//     path="/retailer-dashboard"
//     element={isAuthenticated ? <RetailerDashboard /> : <Navigate to="/login" />}
//   />
//   <Route
//     path="/customer-dashboard"
//     element={isAuthenticated ? <CustomerDashboard /> : <Navigate to="/login" />}
//   />
//           </Routes>
//         </div>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





{/* <Route path="*" element={<NotFound />} /> */}
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import RetailerDashboard from './pages/RetailerDashboard';
// import CustomerDashboard from './pages/CustomerDashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [role, setRole] = useState('');

//   useEffect(() => {
//     // Example of checking authentication state from localStorage (or use context or redux)
//     const token = localStorage.getItem('token');
//     const userRole = localStorage.getItem('role');
//     if (token) {
//       setIsAuthenticated(true);
//       setRole(userRole); // Set the user role (e.g., 'RETAILER' or 'CUSTOMER')
//     }
//   }, []);

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <div className="flex-grow container mx-auto p-4 mt-16">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Role-Based Protected Routes */}
//             {/* <Route
//               path="/RetailerDashboard"
//               element={
//                 isAuthenticated && role === 'RETAILER' ? (
//                   <RetailerDashboard />
//                 ) : (
//                   <Navigate to="/login" />
//                 )
//               }
//             /> */}
//             {/* <Route
//               path="/CustomerDashboard"
//               element={
//                 isAuthenticated && role === 'CUSTOMER' ? (
//                   <CustomerDashboard />
//                 ) : (
//                   <Navigate to="/login" />
//                 )
//               }
//             /> */}

//             <Route path="/customer-dashboard" element={<CustomerDashboard />} />
//             <Route path="/retailer-dashboard" element={<RetailerDashboard />} /> 
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import RetailerDashboard from './pages/RetailerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import ConditionalNavbar from "./components/ConditionalNavbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    // Check authentication state from localStorage or API
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (token) {
      setIsAuthenticated(true);
      setRole(userRole); // Example: 'RETAILER' or 'CUSTOMER'
    }
  }, []);

  // Determine if the Navbar should be displayed
  const HideNavbarRoutes = ['/customer-dashboard', '/retailer-dashboard']; // Only exclude dashboards

  function ConditionalNavbar() {
    const location = useLocation();

    // Debugging: log the current location
    console.log('Current location:', location.pathname);

    // Check if the current path is in the HideNavbarRoutes array
    const hideNavbar = HideNavbarRoutes.includes(location.pathname);

    // Debugging: log whether the Navbar should be hidden
    console.log('Should hide navbar:', hideNavbar);

    return hideNavbar ? null : <Navbar />; // Conditionally render Navbar
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Render Navbar conditionally */}
        <ConditionalNavbar />
        <div className="flex-grow container mx-auto p-4 mt-16">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/retailer-dashboard" element={<RetailerDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
