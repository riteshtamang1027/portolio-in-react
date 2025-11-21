import React from "react";

export default function Admin_dashboard({ setIsAdmin }) {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setIsAdmin(false)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl">Manage Projects</div>
        <div className="p-6 bg-white shadow rounded-xl">Manage Blogs</div>
        <div className="p-6 bg-white shadow rounded-xl">Messages</div>
      </div>
    </div>
  );
}
