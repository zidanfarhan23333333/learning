import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import log from "../../assets/log.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add state for error handling
  const [success, setSuccess] = useState(""); // Add state for success messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:4000/register", { name, email, password })
      .then((result) => {
        setSuccess("Registration successful!");
        setError("");
        // Navigate to login page after successful registration
        setTimeout(() => navigate("/login"), 2000); // Optional: add a delay before navigation
      })
      .catch((err) => {
        setError("Registration failed. Please try again.");
        setSuccess(""); // Clear success message if failed
      });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-blue-100">
        <img src={log} alt="Login" className="max-w-full h-auto" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-md">
          <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
            Future
          </h2>
          <h1 className="text-3xl font-bold mb-8">Register</h1>
          {error && (
            <div className="mb-4 text-red-600 text-center">{error}</div>
          )}
          {success && (
            <div className="mb-4 text-green-600 text-center">{success}</div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="masukkan nama"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="masukkan email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me">Ingat Saya</label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Lupa Kata Sandi
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Buat Akun
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <span>Sudah Punya akun?</span>{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
