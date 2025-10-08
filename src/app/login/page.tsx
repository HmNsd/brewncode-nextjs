"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    password: "",
    email: "",
  });

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      if (!user.email.trim || !user.password.trim()) {
        setError("All fields are required.");
        setButtonDisabled(true);
        return;
      }
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      router.push("/profile");

      // // Simulate Login logic (you can connect to your API here)
      // setTimeout(() => {
      //   setSuccess(true);
      // }, 1000);
    } catch (error: any) {
      setError("An error occurred during login. Please try again.");
      setSuccess(false);
      console.log(error);
    }
  };

  // Add this useEffect to handle button disabled state
  useEffect(() => {
    if (!user.email.trim() || !user.password.trim()) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 px-4">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={onLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 w-full px-4 py-2 dak:bg-gray-700 dak:text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 w-full px-4 py-2 dak:bg-gray-700 dak:text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          {/* Error or Success Message */}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && (
            <p className="text-sm text-green-500">Signup successful!</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md transition-colors duration-200
    ${buttonDisabled
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"}
  `}
            disabled={buttonDisabled}
          >
            Login
          </button>
        </form>

        {/* Redirect Link */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
          <p className="text-gray-700 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <Link
            href="/forgotpassword"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
