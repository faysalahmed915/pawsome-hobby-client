import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { AuthContext } from '../../Provider/AuthProvider';

const hobbyCategories = [
  'Drawing & Painting',
  'Photography',
  'Video Gaming',
  'Fishing',
  'Running',
  'Cooking',
  'Reading',
  'Writing',
  'Others'
];

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  return (
    
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">Create Hobby Group</h2>

        <form className="space-y-6">
          {/* Group Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
            <input
              type="text"
              required
              placeholder="Enter your group name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
            <select
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {hobbyCategories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows="4"
              required
              placeholder="Describe the purpose and goals of the group"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Meeting Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
            <input
              type="text"
              required
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
                required
                placeholder="e.g. 10"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                required
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
                value={user?.displayName || ''}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
              <input
                type="email"
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
