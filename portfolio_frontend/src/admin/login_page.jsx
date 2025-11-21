import React, { useState } from "react";

export default function AdminLogin({ setIsAdmin }) {
  const [email, setEmail] = useState("ritesh@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials
    if (email === email && password === password) {
      setIsAdmin(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 outline-none"
            placeholder="admin@portfolio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-bold py-2 rounded-xl hover:bg-cyan-400 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


