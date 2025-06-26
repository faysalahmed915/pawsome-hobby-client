import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const hobbyCategories = [
  'Drawing & Painting',
  'Photography',
  'Video Gaming',
  'Fishing',
  'Running',
  'Cooking',
  'Reading',
  'Writing',
  'Custom'
];

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  });

  const navigate = useNavigate()

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
    const newGroup = Object.fromEntries(formData.entries())

    // send data to the server
    fetch('https://pawsome-hobby-server.vercel.app/createGroup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGroup),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Optionally, you can redirect or show a success message here
        // form.reset(); 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/MyGroup')
      })
      .catch((error) => {
        console.error('Error:', error);

      })
  }

  // 

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">Create Hobby Group</h2>

        <form className="space-y-6"
          onSubmit={handleCreateGroup}
        >
          {/* Group Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
            <input
              type="text"
              name="groupName"
              // required
              placeholder="Enter your group name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
            {selectedCategory === 'Custom' ? (
              <input
                type="text"
                name="Category"
                // required
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                placeholder="Enter your custom hobby"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <select
                // required
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                {hobbyCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            )}
          </div>


          {/* Custom Category Input (shown if "Others" is selected) */}
          {/* {selectedCategory === 'Others' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Custom Hobby</label>
              <input
                type="text"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                placeholder="Enter your custom hobby"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )} */}

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows="4"
              name='description'
              // required
              placeholder="Describe the purpose and goals of the group"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Meeting Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
            <input
              type="text"
              name='location'
              // required
              placeholder="Enter a physical or virtual meeting location"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Max Members, Start Date, Image URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Members</label>
              <input
                type="number"
                name='maxMembers'
                // required
                placeholder="e.g. 10"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name='startDate'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                name='imageUrl'
                // required
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* User Info (readonly) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
              <input
                type="text"
                name='userName'
                value={user?.displayName || ''}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
              <input
                type="email"
                name='userEmail'
                value={user?.email || ''}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateGroup;
