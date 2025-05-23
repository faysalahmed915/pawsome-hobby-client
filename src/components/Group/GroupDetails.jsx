import React from 'react';

const GroupDetails = ({ group, onJoin, onDelete }) => {
  if (!group) return null;

  const deadlineDate = new Date(group.startDate);
  const now = new Date();
  const isDeadlineOver = now > deadlineDate;

  const deadline = deadlineDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Image Banner */}
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow">
        <img
          src={group.imageUrl}
          alt={group.groupName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Actions */}
      <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">{group.groupName}</h1>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onJoin(group._id)}
            disabled={isDeadlineOver}
            className={`px-4 py-2 rounded-xl transition text-white ${
              isDeadlineOver
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Join Group
          </button>
          <button
            onClick={() => onDelete(group._id)}
            className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
          >
            Delete Group
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-lg">{group.description}</p>

      {/* Prominent Deadline */}
      <div
        className={`mt-6 p-4 rounded-xl shadow-sm flex items-start gap-3 ${
          isDeadlineOver
            ? 'bg-red-100 border-l-4 border-red-500'
            : 'bg-yellow-100 border-l-4 border-yellow-500'
        }`}
      >
        <span className="text-2xl">
          {isDeadlineOver ? '🚫' : '⏳'}
        </span>
        <div>
          <p
            className={`font-semibold text-lg ${
              isDeadlineOver ? 'text-red-800' : 'text-yellow-800'
            }`}
          >
            {isDeadlineOver ? 'Joining ended on:' : 'Deadline to Join:'}
          </p>
          <p
            className={`text-base font-medium ${
              isDeadlineOver ? 'text-red-700' : 'text-yellow-700'
            }`}
          >
            {deadline}
          </p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
        <p><strong>📍 Location:</strong> {group.location}</p>
        <p><strong>👥 Max Members:</strong> {group.maxMembers}</p>
        <p><strong>📅 Starts:</strong> {group.startDate}</p>
        <p><strong>👤 Created By:</strong> {group.userName}</p>
        <p><strong>📧 Email:</strong> {group.userEmail}</p>
        <p><strong>🆔 ID:</strong> {group._id}</p>
      </div>
    </div>
  );
};

export default GroupDetails;
