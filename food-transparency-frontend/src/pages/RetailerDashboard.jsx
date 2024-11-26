// // src/pages/RetailerDashboard.jsx
// import React, { useState } from 'react';

// function RetailerDashboard() {
//   const [foodData, setFoodData] = useState({
//     name: '',
//     category: '',
//     price: '',
//     description: '',
//     history: '',
//   });

//   const handleChange = (e) => {
//     setFoodData({
//       ...foodData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Food added:", foodData);

//     // Send food data to backend (mocking backend call)
//     fetch('/api/food-items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(foodData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Food item added:', data);
//       })
//       .catch((error) => {
//         console.error('Error adding food item:', error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Retailer Dashboard</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Food Name</label>
//           <input
//             type="text"
//             name="name"
//             value={foodData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={foodData.category}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={foodData.price}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={foodData.description}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Food History</label>
//           <textarea
//             name="history"
//             value={foodData.history}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Add Food
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RetailerDashboard;
// import React, { useState } from 'react';

// function RetailerDashboard() {
//   const [foodData, setFoodData] = useState({
//     name: '',
//     category: '',
//     price: '',
//     description: '',
//     history: '',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Handle input field changes
//   const handleChange = (e) => {
//     setFoodData({
//       ...foodData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check for any empty fields
//     if (!foodData.name || !foodData.category || !foodData.price || !foodData.description || !foodData.history) {
//       setError('All fields are required!');
//       return;
//     }

//     // Simulate the API call (mocking backend response)
//     setTimeout(() => {
//       // Mocking a successful backend response
//       const mockApiResponse = { ...foodData, id: Math.floor(Math.random() * 1000) };

//       console.log('Food added:', mockApiResponse);

//       // Resetting form and showing success message
//       setFoodData({ name: '', category: '', price: '', description: '', history: '' });
//       setSuccess('Food item added successfully!');
//       setError('');
//     }, 1000);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Retailer Dashboard</h2>
      
//       {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
//       {success && <div className="bg-green-500 text-white p-2 rounded mb-4">{success}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Food Name</label>
//           <input
//             type="text"
//             name="name"
//             value={foodData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Category</label>
//           <input
//             type="text"
//             name="category"
//             value={foodData.category}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={foodData.price}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={foodData.description}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Food History</label>
//           <textarea
//             name="history"
//             value={foodData.history}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Add Food
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RetailerDashboard;

import React, { useState, useEffect } from "react";

function RetailerDashboard() {
  const [foodItems, setFoodItems] = useState([]); // List of added products
  const [formData, setFormData] = useState({
    foodName: "",
    category: "",
    price: "",
    description: "",
    history: "",
    certification: "",
    originDetails: "",
  });

  // Fetch added products (on load)
  useEffect(() => {
    fetch("/api/retailer/food-items")
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add food item to blockchain
    fetch("/api/retailer/add-food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Food item added successfully!");
          setFormData({
            foodName: "",
            category: "",
            price: "",
            description: "",
            history: "",
            certification: "",
            originDetails: "",
          });
          // Fetch updated food items
          fetch("/api/retailer/food-items")
            .then((res) => res.json())
            .then((data) => setFoodItems(data));
        } else {
          alert("Error adding food item.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container mx-auto p-0">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <div className="text-xl font-bold">Retailer Dashboard</div>
        <div>
          <a href="/" className="mr-4">Home</a>
          <a href="/dashboard" className="mr-4">Dashboard</a>
          <a href="/profile" className="mr-4">Profile</a>
          <a href="/logout">Logout</a>
        </div>
      </nav>

      {/* Add Food Information */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Add Food Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="foodName"
            placeholder="Food Name"
            value={formData.foodName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Processed">Processed</option>
          </select>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            rows="3"
            required
          ></textarea>
          <textarea
            name="history"
            placeholder="History"
            value={formData.history}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            rows="3"
          ></textarea>
          <input
            type="text"
            name="certification"
            placeholder="Certification"
            value={formData.certification}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="originDetails"
            placeholder="Origin Details"
            value={formData.originDetails}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add to Blockchain
          </button>
        </form>
      </div>

      {/* View Added Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">View Added Products</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Product ID</th>
              <th className="border border-gray-300 p-2">Date Added</th>
              <th className="border border-gray-300 p-2">Certification</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.foodName}</td>
                <td className="border border-gray-300 p-2">{item.productId}</td>
                <td className="border border-gray-300 p-2">{item.dateAdded}</td>
                <td className="border border-gray-300 p-2">{item.certification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RetailerDashboard;
