// // src/pages/CustomerDashboard.jsx
// import React, { useState, useEffect } from 'react';

// function CustomerDashboard() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [foodItems, setFoodItems] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);

//   // Search for food when the query changes
//   useEffect(() => {
//     if (searchQuery) {
//       fetchFoodItems();
//     }
//   }, [searchQuery]);

//   // Function to fetch food items based on search query
//   const fetchFoodItems = async () => {
//     try {
//       const response = await fetch(`/api/food-items?search=${searchQuery}`);
//       const data = await response.json();
//       setFoodItems(data);
//     } catch (error) {
//       console.error('Error fetching food items:', error);
//     }
//   };

//   const handleSelectFood = (food) => {
//     setSelectedFood(food);  // Display detailed information of selected food
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Customer Dashboard</h2>

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search for food..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       {/* Display Search Results */}
//       <div>
//         {foodItems.length === 0 ? (
//           <p>No food items found. Please try a different search.</p>
//         ) : (
//           <div className="space-y-4">
//             {foodItems.map((food) => (
//               <div
//                 key={food.id}
//                 className="p-4 border border-gray-300 rounded cursor-pointer"
//                 onClick={() => handleSelectFood(food)}
//               >
//                 <h4 className="text-lg font-semibold">{food.name}</h4>
//                 <p>{food.category}</p>
//                 <p>{food.price} USD</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Display Selected Food Details */}
//       {selectedFood && (
//         <div className="mt-8 p-4 border border-gray-300 rounded">
//           <h4 className="text-2xl font-semibold">{selectedFood.name}</h4>
//           <p><strong>Category:</strong> {selectedFood.category}</p>
//           <p><strong>Description:</strong> {selectedFood.description}</p>
//           <p><strong>Price:</strong> ${selectedFood.price}</p>
//           <p><strong>History:</strong> {selectedFood.history}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useState, useEffect } from 'react';

// function CustomerDashboard() {
//     console.log("Customer Dashboard is working");
//   // Mocked food items (this could come from a backend in a real application)
//   const [foodItems, setFoodItems] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [success, setSuccess] = useState('');

//   // Fetch food items from mock API (you can replace this with a real API call later)
//   useEffect(() => {
//     const fetchFoodItems = () => {
//       // Simulating a mock API response with food items
//       const mockFoodItems = [
//         { id: 1, name: 'Pizza', category: 'Fast Food', price: 10.5, description: 'Cheese and tomato pizza' },
//         { id: 2, name: 'Burger', category: 'Fast Food', price: 5.99, description: 'Beef burger with fries' },
//         { id: 3, name: 'Pasta', category: 'Italian', price: 12.99, description: 'Creamy Alfredo pasta' },
//       ];
//       setFoodItems(mockFoodItems);
//     };

//     fetchFoodItems();
//   }, []);

//   // Add item to cart
//   const addToCart = (item) => {
//     setCart([...cart, item]);
//     setSuccess(`${item.name} has been added to your cart!`);
//   };

//   // Handle checkout (mocking checkout process)
//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       setSuccess('Your cart is empty!');
//       return;
//     }

//     // Simulate a successful checkout process
//     setSuccess('Your order has been placed successfully!');
//     setCart([]);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Customer Dashboard</h2>

//       {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
//         {foodItems.map((item) => (
//           <div key={item.id} className="border p-4 rounded shadow-md">
//             <h3 className="text-xl font-semibold">{item.name}</h3>
//             <p className="text-gray-600">{item.category}</p>
//             <p className="text-gray-700">${item.price}</p>
//             <p className="text-gray-500">{item.description}</p>
//             <button
//               onClick={() => addToCart(item)}
//               className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold">Your Cart</h3>
//         {cart.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty</p>
//         ) : (
//           <ul className="space-y-2">
//             {cart.map((item, index) => (
//               <li key={index} className="border-b py-2">{item.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <button
//         onClick={handleCheckout}
//         className="bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
//       >
//         Checkout
//       </button>
//     </div>
//   );
// }

// export default CustomerDashboard;

import React, { useState, useEffect } from "react";

function CustomerDashboard() {
  const [foodItems, setFoodItems] = useState([]); // Food items from backend
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    certification: "",
  });

  useEffect(() => {
    // Fetch food items from the backend
    fetch("/api/food-items") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  // Handle Search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Filter Change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply Search and Filters
  const filteredFoodItems = foodItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filters.category === "" || item.category === filters.category;
    const matchesPriceRange =
      filters.priceRange === "" ||
      (filters.priceRange === "low" && item.price < 50) ||
      (filters.priceRange === "medium" && item.price >= 50 && item.price <= 100) ||
      (filters.priceRange === "high" && item.price > 100);
    const matchesCertification =
      filters.certification === "" ||
      item.certification === filters.certification;

    return matchesSearch && matchesCategory && matchesPriceRange && matchesCertification;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Dashboard</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Categories</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Snacks">Snacks</option>
          {/* Add more categories as needed */}
        </select>

        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Price Ranges</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $100</option>
          <option value="high">Above $100</option>
        </select>

        <select
          name="certification"
          value={filters.certification}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All Certifications</option>
          <option value="Organic">Organic</option>
          <option value="Non-Organic">Non-Organic</option>
        </select>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoodItems.map((food) => (
          <div
            key={food.id}
            className="border rounded-lg p-4 shadow-lg bg-white"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{food.name}</h3>
            <p className="text-gray-600">{food.category}</p>
            <p className="text-gray-600">${food.price}</p>
            <p className="text-gray-600 mb-2">{food.description}</p>
            <button
              onClick={() => alert(`Food history for ${food.name}`)} // Replace with actual blockchain history call
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Check History
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDashboard;
