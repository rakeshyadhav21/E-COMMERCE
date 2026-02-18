import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Login: ",{name,email,password});
  }

  return (
    <div className="w-full">

      {/* Page Wrapper */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-16 px-6">

        {/* Left Side Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-10 rounded-lg border shadow-sm">

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <h2 className="text-xl font-semibold">Prestige Avenue</h2>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-center mb-3">
              Hey there! 👋
            </h2>

            <p className="text-center text-gray-600 mb-8">
              Enter your username and password to Login.
            </p>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Sign In
            </button>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={loginImg}
            alt="Login Fashion"
            className="w-full h-[650px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
