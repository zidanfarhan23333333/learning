import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import log from "../../assets/log.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        setError("");
        navigate("/home");
      })
      .catch((err) => {
        console.error("Axios error:", err); // Log the exact error
        setError("Login failed. Please check your email and password.");
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
          <h1 className="text-3xl font-bold mb-8">Login</h1>
          {error && (
            <div className="mb-4 text-red-600 text-center">{error}</div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                placeholder="Masukkan email"
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
                placeholder="Masukkan password"
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
                LOGIN
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <span>Belum punya akun?</span>{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-500">
              Buat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
