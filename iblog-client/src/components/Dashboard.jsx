import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <nav className="bg-slate-800 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">iBlog</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-10 h-10 rounded-full border-2 border-slate-600"
              />
              <div>
                <p className="text-white font-medium">{user?.displayName}</p>
                <p className="text-slate-400 text-sm">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to iBlog!</h2>
            <p className="text-slate-300 mb-4">
              You have successfully signed in with Google. This is your dashboard where you can manage your blog posts.
            </p>
            <div className="bg-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Your Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-sm">Name</p>
                  <p className="text-white">{user?.displayName}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white">{user?.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">User ID</p>
                  <p className="text-white text-sm font-mono">{user?.uid}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Account Created</p>
                  <p className="text-white text-sm">
                    {new Date(user?.metadata?.creationTime).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors">
                <h4 className="font-semibold mb-2">Create New Post</h4>
                <p className="text-sm opacity-90">Write and publish a new blog post</p>
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors">
                <h4 className="font-semibold mb-2">View All Posts</h4>
                <p className="text-sm opacity-90">Manage your existing blog posts</p>
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors">
                <h4 className="font-semibold mb-2">Settings</h4>
                <p className="text-sm opacity-90">Customize your blog settings</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 