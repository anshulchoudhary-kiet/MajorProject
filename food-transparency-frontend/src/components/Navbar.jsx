// src/components/Navbar.js
// src/components/Navbar.jsx
// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Food Transparency</h1>
//         <div className="flex space-x-4">
//           <Link to="/" className="hover:text-gray-300">Home</Link>
//           {/* <Link to="/products" className="hover:text-gray-300">Products</Link> */}
//           <Link to="/login" className="hover:text-gray-300">Login</Link>
//           <Link to="/register">Register</Link> 
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Define routes where you want to hide the navbar
  const hideNavbarRoutes = ['/customer-dashboard', '/retailer-dashboard'];

  // Conditionally render Navbar based on the current path
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Food Transparency</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


